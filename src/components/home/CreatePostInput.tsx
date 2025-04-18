'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ModalCreatePost } from '../Item/ModalCreatePost'

export function CreatePostInput() {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] px-6 pt-5 pb-4 hidden md:block">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div
          className="flex items-center justify-between w-full"
          onClick={() => setOpen(true)}
        >
          <div className="w-full mx-2 text-[#999999] dark:text-[#777777] select-none cursor-text">
            What's new?
          </div>
          <Button variant="outline" className="bg-[#fff] dark:bg-[#181818]">
            Post
          </Button>
        </div>
      </div>
      <ModalCreatePost open={open} onOpenChange={setOpen} />
    </div>
  )
}
