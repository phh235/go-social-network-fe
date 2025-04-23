'use client'

import React from 'react'
import Link from 'next/link'

function ProfileTab({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-3 font-bold border-b-[1.5px] w-full text-center ${
        isActive
          ? 'text-black dark:text-white border-black dark:border-white'
          : 'text-[#999999] dark:text-[#777777] border-[#d1d5dc] dark:border-[#323333]'
      }`}
    >
      {label}
    </Link>
  )
}

const TabsProfile = ({
  username,
  activeTab,
}: {
  username: string
  activeTab: 'threads' | 'replies' | 'reposts'
}) => {
  const baseUrl = `/${username}`

  return (
    <div className="flex justify-center bg-white dark:bg-[#181818]">
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" />
        <div className="flex relative z-10 justify-center">
          <ProfileTab
            href={baseUrl}
            label="Threads"
            isActive={activeTab === 'threads'}
          />
          <ProfileTab
            href={`${baseUrl}/replies`}
            label="Replies"
            isActive={activeTab === 'replies'}
          />
          <ProfileTab
            href={`${baseUrl}/reposts`}
            label="Reposts"
            isActive={activeTab === 'reposts'}
          />
        </div>
      </div>
    </div>
  )
}

export default TabsProfile
