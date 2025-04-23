'use client'

import React from 'react'
import { CardPost } from '@/components/Card/CardPost'
import { postsData } from '@/data/postsData'

export default function ThreadsPage({
  params: paramsPromise,
}: {
  params: Promise<{ username: string }>
}) {
  const params = React.use(paramsPromise)
  const { username } = params
  const userPosts = postsData.filter((post) => post.user.username === username)

  return (
    <div className="mt-4">
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <CardPost key={post.id} post={post} user={post.user} />
        ))
      ) : (
        <div className="py-8 text-center text-[#999999] dark:text-[#777777]">
          No threads yet
        </div>
      )}
    </div>
  )
}
