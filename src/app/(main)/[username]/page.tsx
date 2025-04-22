import { CardContent } from '@/components/Card/CardContent'

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CardContent>
        <div className="flex items-center justify-center px-3 md:px-6 py-3">
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>
      </CardContent>
    </main>
  )
}
