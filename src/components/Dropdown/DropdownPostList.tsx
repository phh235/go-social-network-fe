'use client'

import { CircleAlert, Link, MoreHorizontal, UserRoundX } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { toastInfo } from '@/utils'

interface DropdownPostListProps {
  trigger?: React.ReactNode
}

export function DropdownPostList({ trigger }: DropdownPostListProps) {
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
            <span>Copy link</span>
            <Link size={21} className="text-black dark:text-white" />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between"
            onClick={handleCopyLink}
          >
            <span className="text-[#ff3040]">Block</span>
            <UserRoundX size={21} className="text-[#ff3040]" />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between"
            onClick={handleCopyLink}
          >
            <span className="text-[#ff3040]">Report</span>
            <CircleAlert size={21} className="text-[#ff3040]" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
