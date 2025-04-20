import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../ui/button'
import { formatNumber } from '@/utils'
import { Post } from '@/models/Post'

interface UserProfileContentProps {
  user: Post
  className?: string
}

export function UserProfileContent({
  user,
  className = '',
}: UserProfileContentProps) {
  return (
    <div className={className}>
      <div className="flex justify-between space-x-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold">{user.fullName}</h2>
          <span className="text-[15px]">{user.username}</span>
          <p className="text-muted-foreground text-[15px]">
            {user.occupation} at{' '}
            <span className="hover:underline underline-offset-2 text-[#0095f6] cursor-pointer">
              @{user.company.toLowerCase()}
            </span>
          </p>
          <div className="flex items-center pt-2">
            <span className="text-muted-foreground">
              {formatNumber(user.followers)} followers
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
    </div>
  )
}
