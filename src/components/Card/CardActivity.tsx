'use client'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import ButtonFollow from '../Button/ButtonFollow'
import { CardHoverInfo } from './CardHoverInfo'
import { Activity } from '@/models/Activity'
import { HandWaving, User, ArrowBendUpRight, Heart } from '@phosphor-icons/react'
import { formatTimeAgo } from '@/utils'

interface CardActivityProps {
  activity: Activity
}

const ACTION_CONFIG = {
  followed: {
    icon: User,
    bgColor: 'bg-[#6e3def]',
  },
  follow: {
    icon: HandWaving,
    bgColor: 'bg-[#ffc632]',
  },
  reposts: {
    icon: ArrowBendUpRight,
    bgColor: 'bg-[#00ba7c]',
  },
  liked: {
    icon: Heart,
    bgColor: 'bg-[#ea263c]',
  },
}

export function CardActivity({ activity }: CardActivityProps) {
  const user = activity.user

  const config =
    ACTION_CONFIG[activity.actionType as keyof typeof ACTION_CONFIG] ||
    ACTION_CONFIG.follow
  const IconComponent = config.icon

  return (
    <>
      <div className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] last:border-b-0 mt-2">
        <div className="flex justify-between py-3 px-3 md:px-6">
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
            <button
              className={`absolute bottom-1 right-2 ${config.bgColor} text-white dark:text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-[#181818]`}
            >
              <IconComponent
                weight="fill"
                size={12}
                className="text-white"
              />
            </button>
          </div>
          <div className="flex flex-col text-[15px] flex-1 min-w-0">
            <div className="flex items-start justify-between -mb-3.5 -mt-1">
              <div>
                <div className="flex">
                  <CardHoverInfo user={user} />
                  <p className="text-[#999999] dark:text-[#777777] ms-2">
                    {formatTimeAgo(activity.timestamp)}
                  </p>
                </div>
                <div className="text-[#999999] dark:text-[#777777]">
                  {activity.action}
                </div>
              </div>
              <div>
                <ButtonFollow className="mt-1" user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
