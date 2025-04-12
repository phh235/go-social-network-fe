"use client";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            Login
            <Link href="/register" className="mt-4 text-blue-500">
                Go to register page
            </Link>
        </main>
    );
}
