import NextAuth from "next-auth";
import authConfig from "./configs/auth.config";

export const { auth: middleware } = NextAuth(authConfig);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/Admin-page/:path*'],
}