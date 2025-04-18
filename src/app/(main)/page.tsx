'use client'

import { ContentCard } from '@/components/home/ContentCard'
import { FloatingActionButton } from '@/components/home/FloatingActionButton'
import { TabsLayout } from '@/components/layout/TabsLayout'

export default function HomePage() {
  return (
    <TabsLayout>
      <main className="flex min-h-screen flex-col items-center justify-start pt-4 md:p-4">
        <ContentCard />
        <FloatingActionButton />
      </main>
    </TabsLayout>
  )
}
