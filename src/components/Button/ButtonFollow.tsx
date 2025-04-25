import React, { useState } from 'react'
import { Button } from '../ui/button'
import DialogUnfollow from '@/components/Dialog/DialogUnfollow'
import { User } from '@/models/User'
import { toastSuccess } from '@/utils'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations()
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
        className={`font-bold w-[120px] text-[15px] ${className}`}
        onClick={handleClick}
      >
        {isFollowing ? t('following') : t('follow')}
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
