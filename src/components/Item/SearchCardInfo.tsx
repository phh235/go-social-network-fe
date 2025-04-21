'use client'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { HoverCardInfo } from './HoverCardInfo'
import { User } from '@/models/User'
import { Button } from '../ui/button'
import { formatNumber, toastInfo } from '@/utils'
import FollowButton from '../Button/FollowButton'

interface SearchCardInfoProps {
  user: User
}

export function SearchCardInfo({ user }: SearchCardInfoProps) {
  const handleFollow = () => {
    toastInfo('Upcoming feature!')
  }
  return (
    <>
      <div className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] last:border-b-0">
        <div className="flex justify-between py-4 px-3 md:px-6 pb-6">
          <div className="relative w-12 h-12">
            <Avatar className="!w-9 !h-9 border-[1px] border-[#d9d9d9] dark:border-[#383939]">
              <AvatarImage
                src={user.avatarUrl}
                alt={`${user.username}'s Avatar`}
              />
              <AvatarFallback>
                {user.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col text-[15px] flex-1 min-w-0">
            <div className="flex items-start justify-between -mb-3.5 -mt-1">
              <div>
                <HoverCardInfo user={user} />
                <p className="text-[#999999] dark:text-[#777777] ">
                  {user.fullName}
                </p>
                <p className="text-[#999999] dark:text-[#777777] ">
                  {user.occupation} at{' '}
                  <span className="hover:underline underline-offset-2 text-[#0095f6] cursor-pointer">
                    @{user.company.toLowerCase()}
                  </span>
                </p>
                <p className="text-[#999999] dark:text-[#777777] mt-3 mb-2">
                  {formatNumber(user.followers)} followers
                </p>
              </div>
              <div>
                <FollowButton onClick={handleFollow} marginTop={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
