'use client'

import { ContentCard } from '@/components/home/ContentCard'
import { TabsLayout } from '@/components/layout/TabsLayout'

export default function FollowingPage() {
  return (
    <TabsLayout>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <ContentCard>
          <div className="flex items-center justify-center px-3 md:px-6 py-3">
            <h1 className="text-3xl font-bold">Following</h1>
          </div>
        </ContentCard>
      </main>
    </TabsLayout>
  )
}
