# Prisma migrations and Neon: troubleshooting

This guide applies to this repository's Prisma 7 setup:

- Prisma schema: `prisma/schema.prisma`
- Prisma config and migration connection: `prisma.config.ts`
- Migration files: `prisma/migrations/`
- Database URL: `DATABASE_URL`

## Why the Neon schema may not change

Prisma migrations do not continuously synchronize `schema.prisma` with Neon.
`prisma migrate deploy` only runs migration SQL files that exist locally and
are not recorded as successfully applied in the target database's
`_prisma_migrations` table. It does not create a migration from schema changes.

The command may also have been run against a different Neon branch, database,
or PostgreSQL schema than the one currently open in the Neon console. In Neon,
branches are separate database environments. The branch/database in the
connection string used by Prisma must match the branch/database selected in
the console.

## Check this repository's current migration

The existing migration
`prisma/migrations/20261008102917_dobavlenie_novykh_tablits_posty_i_galereya/migration.sql`
creates `gallery` with `category TEXT NOT NULL`, and does not create a
`description` column.

The current `prisma/schema.prisma` instead declares `category Boolean` and
includes a required `description String`. If that migration was already
applied, running `migrate deploy` again will not update `gallery` to match
these later schema edits. A new migration is needed.

## Safe workflow

Run commands from the repository root in PowerShell.

### 1. Confirm which database Prisma will use

Check that `DATABASE_URL` is set in the local `.env` or the deployment
environment, and that it belongs to the intended Neon project and branch.
Do not paste or commit the URL: it contains credentials. The repository's
`prisma.config.ts` loads `.env` and uses `DATABASE_URL` for migrations.

In the Neon console, confirm the selected project, branch, and database. The
connection URL's host identifies the Neon branch; its path identifies the
database. Also confirm the table is being viewed under the `public` schema
(unless the application was intentionally configured to use another schema).

### 2. Check migration status

```powershell
npx prisma migrate status
```

This reports migrations pending locally and migrations recorded by the
database selected by `DATABASE_URL`. If the result does not match what you
expect, check the URL and the branch/database selection before changing
migration history.

For an additional check in the Neon SQL Editor, run this on the intended
branch and database:

```sql
SELECT current_database(), current_schema();

SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_name IN ('gallery', 'posts', '_prisma_migrations')
ORDER BY table_schema, table_name;
```

To see which migrations that database recorded:

```sql
SELECT migration_name, finished_at, rolled_back_at
FROM public."_prisma_migrations"
ORDER BY started_at;
```

If `_prisma_migrations` does not exist, the migrations have not been applied
to that database, or the table is in a different schema.

### 3. Create a new migration for schema edits

Do not rewrite a migration that has already been applied to a shared or
production database. Update `prisma/schema.prisma`, then create a new migration
against a development database:

```powershell
npx prisma migrate dev --name update_gallery_schema
```

Review the new SQL under `prisma/migrations/` before applying it elsewhere.
In particular, changing `category` from text to boolean requires a deliberate
conversion of existing values. Adding a required `description` column to a
table that already contains rows also needs a safe backfill or a suitable
default; otherwise the migration may fail. Do not assume Prisma can infer how
existing data should be converted.

Keep the generated migration file in version control. Do not use `db push` as
a replacement for versioned migrations in a deployed environment.

### 4. Apply the migration to the intended Neon branch

Set `DATABASE_URL` in the deployment environment to the intended Neon branch
and database, then run:

```powershell
npx prisma migrate deploy
```

For example, run this as a deployment/release step after the migration file is
available in the deployed revision. Re-run `npx prisma migrate status` against
the same connection to verify that there are no pending migrations.

### 5. Regenerate Prisma Client when needed

Changing the Prisma schema also requires an up-to-date generated client for
application code:

```powershell
npx prisma generate
```

Generating the client does **not** apply database migrations. Applying a
migration does **not** automatically regenerate the client in every deployment
setup; treat these as separate steps.

## Common results

| What you observe | Likely cause | What to do |
| --- | --- | --- |
| `gallery` is absent in Neon | Migration did not run on the selected branch/database, or it failed | Check `DATABASE_URL`, Neon branch/database, and `migrate status`; inspect deployment output |
| `gallery` exists but its columns differ from `schema.prisma` | The migration was already applied before the schema changed | Create and review a new migration, then deploy it |
| Prisma says there are no pending migrations, but the table is missing | The command and console may be looking at different databases/branches, or migration history was marked applied without matching SQL changes | Compare the exact target connection and inspect `_prisma_migrations` and `information_schema.tables` |
| `migrate deploy` fails | SQL/data constraint issue, connection problem, or a previously failed migration | Read the complete error and fix the cause; do not mark a migration applied unless the database already matches its intended result |
| The database table is correct but Prisma reports an unknown model/field | The generated Prisma Client may be stale | Run `npx prisma generate` and rebuild/restart the app |

## Avoid these recovery shortcuts

- Do not edit an already-applied migration to try to change the database. Add a
  new migration instead.
- Do not run `prisma migrate reset` against production or any database whose
  data must be preserved.
- Do not run `prisma migrate resolve --applied` just to silence a migration
  status problem. Use it only after verifying that the database already
  contains the complete result of that migration.
- Do not share `DATABASE_URL` in screenshots, chat, logs, or source control.
