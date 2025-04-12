import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Welcome to Home</h1>
      <p className="mt-2 text-gray-500">This is the main landing page.</p>
      <Link href="/login" className="mt-4 text-blue-500">
        Login page
      </Link>
    </main>
  )
}
