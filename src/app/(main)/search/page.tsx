import { ContentCard } from '@/components/home/ContentCard'

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ContentCard>
        <div className="flex items-center justify-center px-3 md:px-6 py-3">
          <h1 className="text-3xl font-bold">Search</h1>
        </div>
      </ContentCard>
    </main>
  )
}
