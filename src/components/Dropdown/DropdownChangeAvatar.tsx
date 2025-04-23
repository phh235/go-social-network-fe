'use client'

import { MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { toastInfo } from '@/utils'

interface DropdownChangeAvatarProps {
  trigger?: React.ReactNode
}

export function DropdownChangeAvatar({ trigger }: DropdownChangeAvatarProps) {
  const handleCopyLink = () => {
    toastInfo('Upcoming feature!')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || (
          <button className="p-2 outline-none rounded-full hover:bg-[#f5f5f5] dark:hover:bg-[#1e1e1e] cursor-pointer transition-all duration-200 active:scale-90 text-[#999999] dark:text-[#777777]">
            <MoreHorizontal size={20} />
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-58 rounded-2xl">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between"
            onClick={handleCopyLink}
          >
            <span>Upload picture</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between"
            onClick={handleCopyLink}
          >
            <span className="text-[#ff3040]">Remove current picture</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
