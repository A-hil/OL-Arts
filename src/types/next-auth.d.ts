import type { DefaultSession } from "next-auth";

type Role = "ADMIN" | "GUEST";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: Role;
      login?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: Role;
    login?: string;
  }
}