import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { User } from '@/models/User'
import { useTranslations } from 'next-intl'

interface UnfollowDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

const DialogButton = ({
  children,
  onClick,
  isDestructive = false,
  borderRight = false,
}: {
  children: React.ReactNode
  onClick: () => void
  isDestructive?: boolean
  borderRight?: boolean
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`w-full font-bold py-3.5 text-center transition-all duration-200 cursor-pointer border-t border-[#d9d9d9] dark:border-[#383939]  
        hover:bg-[#fafafa] dark:hover:bg-[#0a0a0a]
        ${borderRight ? 'border-r' : ''}
        ${isDestructive ? 'text-[#ff3040]' : 'text-black dark:text-white'}`}
    >
      {children}
    </button>
  )
}

const UnfollowDialog = ({
  user,
  open,
  onOpenChange,
  onConfirm,
}: UnfollowDialogProps) => {
  const t = useTranslations()
  const fallback = user?.username
    ? user.username.charAt(0)
    : user?.fullName
      ? user.fullName.charAt(0)
      : '?'

  const displayName = user?.username || user?.fullName || 'người dùng này'

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-[280px] max-w-[280px] p-0 rounded-2xl bg-white dark:bg-[#181818] overflow-hidden">
        <div className="flex flex-col items-center p-6 pb-0">
          <Avatar className="h-16 w-16 mb-2">
            <AvatarImage src={user?.avatarUrl} alt={displayName} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <AlertDialogHeader className="gap-0 mt-2">
            <AlertDialogTitle className="text-center text-[15px] text-black dark:text-white break-words max-w-[230px] mx-auto">
              {t('unfollow')} {displayName}?
            </AlertDialogTitle>
          </AlertDialogHeader>
        </div>
        <div className="grid grid-cols-2">
          <DialogButton onClick={() => onOpenChange(false)} borderRight>
            {t('cancel')}
          </DialogButton>
          <DialogButton onClick={onConfirm} isDestructive borderRight>
            {t('unfollow')}
          </DialogButton>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default UnfollowDialog
