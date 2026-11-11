import type { NextAuthConfig } from "next-auth";

const authConfig = {
  providers: [],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        if (typeof token.id === "string") {
          session.user.id = token.id;
        }
        session.user.role = token.role === "ADMIN" ? "ADMIN" : "GUEST";
      }
      return session;
    },
    authorized({ auth, request }) {
      if (!auth?.user) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.url);
        return Response.redirect(loginUrl);
      }

      if (auth.user.role !== "ADMIN") {
        return Response.redirect(new URL("/", request.url));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;
