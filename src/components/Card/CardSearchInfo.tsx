'use client'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { User } from '@/models/User'
import { formatNumber, renderBio, toastInfo } from '@/utils'
import ButtonFollow from '../Button/ButtonFollow'
import { CardHoverInfo } from '../Card/CardHoverInfo'
import { useTranslations } from 'next-intl'

interface CardSearchInfoProps {
  user: User
}

export function CardSearchInfo({ user }: CardSearchInfoProps) {
  const t = useTranslations()
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
                <CardHoverInfo user={user} />
                <p className="text-[#999999] dark:text-[#777777]">
                  {user.fullName}
                </p>
                <p
                  className="text-black dark:text-white"
                  dangerouslySetInnerHTML={{ __html: renderBio(user.bio) }}
                ></p>
                <p className="text-[#999999] dark:text-[#777777] mt-3 mb-2">
                  {formatNumber(user.followers)} {t('followers')}
                </p>
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
