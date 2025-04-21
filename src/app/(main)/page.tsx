'use client'

import { ContentCard } from '@/components/home/ContentCard'
import { CreatePostInput } from '@/components/home/CreatePostInput'
import { FloatingActionButton } from '@/components/home/FloatingActionButton'
import { PostCard } from '@/components/Item/PostCard'
import { TabsLayout } from '@/components/layout/TabsLayout'
import { postsData } from '@/data/postsData'

export default function HomePage() {
  return (
    <TabsLayout>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <ContentCard>
          <CreatePostInput />
          {postsData.map((post) => (
            <PostCard key={post.id} post={post} user={post.user} />
          ))}
        </ContentCard>
        <FloatingActionButton />
      </main>
    </TabsLayout>
  )
}
