import {prisma} from "../lib/prisma";
import {PrismaAdapter} from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

import GoogleProvider from "next-auth/providers/google";

export const {auth, handlers, signIn, signOut} = NextAuth({
    ...authConfig,
    session: {
        ...authConfig.session,
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 дней freshed сессия 
    },

    providers:[GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                const isAdmin = user.email?.trim().toLowerCase() === "hilevro@gmail.com";
                const role = isAdmin ? "ADMIN" : "GUEST";

                if (isAdmin) {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { role },
                    });
                }

                token.id = user.id;
                token.role = role;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token}) {
            if (session.user) {
                if (typeof token.id === "string") {
                    session.user.id = token.id;
                }
                session.user.role = token.role === "ADMIN" ? "ADMIN" : "GUEST";
            }
            return session;
        },
    },
});