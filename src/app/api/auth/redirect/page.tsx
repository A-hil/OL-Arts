import { redirect } from "next/navigation";
import { auth } from "../../../../configs/auth";

export default async function AuthRedirectPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role === "ADMIN") {
    redirect("/Admin-page");
  }

  redirect("/");
}