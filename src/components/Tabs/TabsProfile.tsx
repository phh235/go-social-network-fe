import React from 'react'
import TabsProfileChild from './TabsProfileChild'

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
          <TabsProfileChild
            href={baseUrl}
            label="Threads"
            isActive={activeTab === 'threads'}
          />
          <TabsProfileChild
            href={`${baseUrl}/replies`}
            label="Replies"
            isActive={activeTab === 'replies'}
          />
          <TabsProfileChild
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
