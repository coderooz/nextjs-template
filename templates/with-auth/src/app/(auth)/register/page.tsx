import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <SignUp />
    </main>
  );
}
