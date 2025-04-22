import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Image from 'next/image'
import verifiedIcon from '@/app/assets/svg/verified.svg'
import { User } from '@/models/User'
import { UserProfileContent } from '../Item/UserProfileContent'

interface CardHoverInfoProps {
  user: User
}

export function CardHoverInfo({ user }: CardHoverInfoProps) {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger asChild>
        <span className="inline-flex items-center font-bold hover:underline underline-offset-2 cursor-pointer">
          {user.username}
          {user.isVerified && (
            <Image
              src={verifiedIcon}
              alt="Verified"
              width={14}
              height={14}
              className="ml-1 select-none"
            />
          )}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-95 p-6 rounded-2xl">
        <UserProfileContent user={user} />
      </HoverCardContent>
    </HoverCard>
  )
}
