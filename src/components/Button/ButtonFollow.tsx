import React, { useState } from 'react'
import { Button } from '../ui/button'
import DialogUnfollow from '@/components/Dialog/DialogUnfollow'
import { User } from '@/models/User'
import { toastSuccess } from '@/utils'

interface ButtonFollowProps {
  className?: string
  user: User
  initiallyFollowing?: boolean
}

const ButtonFollow = ({
  className,
  user,
  initiallyFollowing = false,
}: ButtonFollowProps) => {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing)
  const [showDialogUnfollow, setShowDialogUnfollow] = useState(false)

  const handleClick = () => {
    if (isFollowing) {
      setShowDialogUnfollow(true)
    } else {
      setIsFollowing(true)
    }
  }

  const handleUnfollow = () => {
    toastSuccess(`Unfollowed ${user.username}`)
    setIsFollowing(false)
    setShowDialogUnfollow(false)
  }

  return (
    <>
      <Button
        variant={isFollowing ? 'outline' : 'default'}
        className={`font-bold h-[34px] w-[104px] text-[15px] ${className} ${isFollowing ? 'text-[#999999] hover:text-[#999999] dark:text-[#777777] dark:hover:text-[#777777]' : ''}`}
        onClick={handleClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
      {user && (
        <DialogUnfollow
          user={user}
          open={showDialogUnfollow}
          onOpenChange={setShowDialogUnfollow}
          onConfirm={handleUnfollow}
        />
      )}
    </>
  )
}

export default ButtonFollow
