import NextAuth from "next-auth";
import authConfig from "./configs/auth.config";

const { auth } = NextAuth(authConfig);
export default auth;

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/Admin-page/:path*'],
}