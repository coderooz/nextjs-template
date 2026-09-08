import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sign in or create an account to continue.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/login"
          className="rounded-lg bg-primary px-6 py-3 text-primary-foreground"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="rounded-lg border px-6 py-3"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
