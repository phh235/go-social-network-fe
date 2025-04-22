'use client'

import { CardContent } from '@/components/Card/CardContent'
import { CreatePostInput } from '@/components/home/CreatePostInput'
import { CardPost } from '@/components/Card/CardPost'
import { TabsLayout } from '@/components/layout/TabsLayout'
import { postsData } from '@/data/postsData'

export default function HomePage() {
  return (
    <TabsLayout>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <CardContent>
          <CreatePostInput />
          {postsData.map((post) => (
            <CardPost key={post.id} post={post} user={post.user} />
          ))}
        </CardContent>
      </main>
    </TabsLayout>
  )
}
