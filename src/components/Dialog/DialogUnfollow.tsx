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
        <div className="border-t border-[#d9d9d9] dark:border-[#383939] grid grid-cols-2">
          <button
            onClick={() => onOpenChange(false)}
            className="cursor-pointer font-bold py-3.5 text-center text-black bg-white dark:bg-[#181818] dark:text-white hover:bg-[#fafafa] dark:hover:bg-[#0a0a0a] border-r border-[#d9d9d9] dark:border-[#383939] transition-all duration-200"
          >
            {t('cancel')}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              onConfirm()
            }}
            className="cursor-pointer font-bold py-3.5 text-center bg-white dark:bg-[#181818] hover:bg-[#fafafa] dark:hover:bg-[#0a0a0a] text-[#ff3040] transition-all duration-200"
          >
            {t('unfollow')}
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default UnfollowDialog
