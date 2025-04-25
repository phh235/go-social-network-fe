import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatNumber, renderBio } from '@/utils'
import { User } from '@/models/User'
import Image from 'next/image'
import verifiedIcon from '@/app/assets/svg/verified.svg'
import ButtonFollow from '../Button/ButtonFollow'
import { useTranslations } from 'next-intl'

interface UserProfileContentProps {
  user: User
  className?: string
}

export function UserProfileContent({
  user,
  className = '',
}: UserProfileContentProps) {
  const t = useTranslations()
  return (
    <div className={className}>
      <div className="flex justify-between space-x-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold flex">
            {user.fullName}{' '}
            {user.isVerified && (
              <Image
                src={verifiedIcon}
                alt="Verified"
                width={20}
                height={20}
                className="ml-1 select-none"
              />
            )}
          </h2>
          <span className="text-[15px]">{user.username}</span>
          <p
            className="text-muted-foreground text-[15px]"
            dangerouslySetInnerHTML={{ __html: renderBio(user.bio) }}
          ></p>
          <div className="flex items-center pt-2">
            <span className="text-muted-foreground">
              {formatNumber(user.followers)} {t('followers')}
            </span>
          </div>
        </div>
        <Avatar className="w-16 h-16">
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback>
            {user.username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <ButtonFollow className="w-full mt-5" user={user} />
    </div>
  )
}
