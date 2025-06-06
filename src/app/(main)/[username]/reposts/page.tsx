'use client'

import React from 'react'

export default function RepostsPage({
  params: paramsPromise,
}: {
  params: Promise<{ username: string }>
}) {
  const params = React.use(paramsPromise)
  const { username } = params

  return (
    <div className="py-8 text-center text-[#999999] dark:text-[#777777]">
      No reposts yet
    </div>
  )
}
