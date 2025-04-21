import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'
import { UserProfileContent } from './UserProfileContent'
import { User } from '@/models/User'

interface ModalCardInfoProps {
  user: User
  trigger: ReactNode
}

export function ModalCardInfo({ user, trigger }: ModalCardInfoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-95 p-6 rounded-2xl [&>button:last-child]:hidden">
        <DialogTitle className="sr-only">
          User Profile: {user.fullName}
        </DialogTitle>
        <UserProfileContent user={user} />
      </DialogContent>
    </Dialog>
  )
}
