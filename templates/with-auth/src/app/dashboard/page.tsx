import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Welcome back{user?.firstName ? `, ${user.firstName}` : ""}!
      </p>
    </main>
  );
}
