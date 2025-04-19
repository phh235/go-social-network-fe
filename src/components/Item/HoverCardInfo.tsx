import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '../ui/button'
import { Post } from '@/data/dummyPosts'

interface HoverCardInfoProps {
  user: Post
}

export function HoverCardInfo({ user }: HoverCardInfoProps) {
  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger asChild>
        <span className="font-bold hover:underline underline-offset-2 cursor-pointer">
          {user.username}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-85 p-6 rounded-2xl">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">{user.fullName}</h2>
            <h4 className="text-[15px]">{user.username}</h4>
            <p className="text-muted-foreground text-[15px]">
              {user.occupation} at{' '}
              <span className="hover:underline underline-offset-2 text-[] text-[#0095f6] cursor-pointer">
                @{user.company.toLowerCase()}
              </span>
            </p>
            <div className="flex items-center pt-2">
              <span className="text-muted-foreground">
                {user.followers.toLocaleString()} followers
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
        <Button className="w-full mt-4">Follow</Button>
      </HoverCardContent>
    </HoverCard>
  )
}
