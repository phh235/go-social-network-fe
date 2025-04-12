"use client";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            Register
            <Link href="/login" className="mt-4 text-blue-500">
                Back to login page
            </Link>
        </main>
    );
}
