'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import ButtonFollow from '@/components/Button/ButtonFollow'
import { CardContent } from '@/components/Card/CardContent'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { usersData } from '@/data/usersData'
import { formatNumber, renderBio } from '@/utils'
import { DialogEditProfile } from '@/components/Dialog/DialogEditProfile'
import TabsProfile from '@/components/Tabs/TabsProfile'
import Image from 'next/image'
import verifiedIcon from '@/app/assets/svg/verified.svg'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function ProfileLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode
  params: Promise<{ username: string }>
}) {
  const params = React.use(paramsPromise)
  const { username } = params
  const pathname = usePathname()

  const user = usersData.find((u) => u.username === username) || usersData[1]

  const getActiveTab = () => {
    if (pathname.includes('/replies')) return 'replies'
    if (pathname.includes('/reposts')) return 'reposts'
    return 'threads'
  }

  const activeTab = getActiveTab()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CardContent>
        <div className="flex items-start justify-between px-3 md:px-6 pt-4 pb-[10px]">
          <div className="flex flex-col gap-1 mt-3.5">
            <div className="flex">
              <h1 className="font-bold text-2xl">{user.fullName}</h1>{' '}
              {user.isVerified && (
                <Image
                  src={verifiedIcon}
                  alt="Verified"
                  width={24}
                  height={24}
                  className="ms-2 select-none"
                />
              )}
            </div>
            <span className="-mt-1.5 text-[15px]">{user.username}</span>
          </div>
          <PhotoProvider>
            <PhotoView src={user.avatarUrl}>
              <Avatar className="w-16 h-16 md:w-21 md:h-21 rounded-full overflow-hidden cursor-pointer">
                <AvatarImage
                  className="w-full h-full object-cover rounded-full"
                  src={user.avatarUrl}
                />
                <AvatarFallback className="rounded-full bg-gray-200 flex items-center justify-center">
                  {user.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="px-3 md:px-6 mt-2">
          <p
            className="text-[15px]"
            dangerouslySetInnerHTML={{ __html: renderBio(user.bio) }}
          ></p>
          <p className="mt-5 text-[#999999] dark:text-[#777777] text-[15px]">
            {formatNumber(user.followers)} followers
          </p>
        </div>
        {/* <div className="grid grid-cols-2 gap-2 p-3 md:px-6 mt-4">
          <ButtonFollow className="w-full font-bold" user={user} />
          <Button
            className="w-full font-bold bg-white dark:bg-[#181818]"
            variant="outline"
          >
            Mention
          </Button>
        </div> */}
        <div className="p-3 md:px-6">
          <DialogEditProfile
            user={user}
            trigger={
              <Button
                variant="outline"
                className="w-full font-bold bg-white dark:bg-[#181818]"
              >
                Edit Profile
              </Button>
            }
          />
        </div>
        <TabsProfile username={username} activeTab={activeTab} />
        {children}
      </CardContent>
    </main>
  )
}
