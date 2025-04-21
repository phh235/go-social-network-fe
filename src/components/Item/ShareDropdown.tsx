'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { formatNumber, toastSuccess } from '@/utils'
import { LinkIcon, Send } from 'lucide-react'
import useIsMobile from '@/helper'

interface ShareDropdownProps {
  count?: number
  postId: string | number
}

export function ShareDropdown({ count, postId }: ShareDropdownProps) {
  const isMobile = useIsMobile()
  const handleCopyLink = () => {
    toastSuccess('Link copied to clipboard')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-[#424242] outline-none dark:text-[#cccccc] relative custom-hover-bg rounded-full px-2 py-2 transition-all cursor-pointer leading-none">
          <Send size={16} />
          {count !== undefined && <span>{formatNumber(count)}</span>}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? 'end' : 'start'}
        className="w-48 rounded-xl"
      >
        <DropdownMenuItem
          onClick={handleCopyLink}
          className="cursor-pointer py-2.5 rounded-md text-[15px] flex justify-between items-center"
        >
          <span>Copy link</span>{' '}
          <LinkIcon size={16} className="text-black dark:text-white" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
