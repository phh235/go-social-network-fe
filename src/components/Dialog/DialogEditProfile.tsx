'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { User } from '@/models/User'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownChangeAvatar } from '../Dropdown/DropdownChangeAvatar'
import SwitchV1 from '../Item/SwitchV1'

interface DialogEditProfileProps {
  user: User
  trigger: React.ReactNode
}

export function DialogEditProfile({ user, trigger }: DialogEditProfileProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    username: user.username,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log('Updated profile:', formData)
    setOpen(false) // Close the dialog after submission
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-full md:min-w-[620px] rounded-2xl [&>button:last-child]:hidden">
        <DialogTitle className="sr-only">Edit profile</DialogTitle>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <Label className="ms-1 font-bold" htmlFor="username">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <DropdownChangeAvatar
              trigger={
                <Avatar className="w-13 h-13 rounded-full overflow-hidden cursor-pointer">
                  <AvatarImage
                    className="w-full h-full object-cover rounded-full"
                    src={formData.avatarUrl}
                  />
                  <AvatarFallback className="rounded-full bg-gray-200 flex items-center justify-center">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              }
            />
          </div>
          <hr className="border-1" />
          <div className="space-y-1">
            <Label className="ms-1 font-bold" htmlFor="fullName">
              Full name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <hr className="border-1" />
          <div className="space-y-1">
            <Label className="ms-1 font-bold" htmlFor="bio">
              Bio
            </Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <hr className="border-1" />
          <div className="flex justify-between items-center">
            <div className="text-[15px]">
              <p className="font-bold">Private profile</p>
              <p className="text-[12px] text-[#999999] dark:text-[#777777]">
                Private profiles can only reply to their followers. Switch to
                public to reply to anyone.
              </p>
            </div>
            <SwitchV1 />
          </div>
          <Button
            type="submit"
            className="w-full py-6 font-bold mt-3"
            onClick={handleSubmit}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
