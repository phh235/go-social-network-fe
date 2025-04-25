'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useIsMobile from '@/helper'
import { formatNumber, toastSuccess } from '@/utils'
import { Repeat } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface DropdownRepostProps {
  count?: number
  postId: string | number
}

export function DropdownRepost({ count, postId }: DropdownRepostProps) {
  const t = useTranslations()
  const isMobile = useIsMobile()
  const handleRepost = () => {
    toastSuccess('Post reposted')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-[#424242] dark:text-[#cccccc] outline-none relative custom-hover-bg rounded-full px-2 py-2 transition-all cursor-pointer leading-none">
          <Repeat size={16} />
          {count !== undefined && <span>{formatNumber(count)}</span>}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? 'end' : 'start'}
        className="w-48 rounded-xl"
      >
        <DropdownMenuItem
          onClick={handleRepost}
          className="cursor-pointer py-2.5 rounded-md text-[15px] flex justify-between items-center"
        >
          {t('reposts')} <Repeat size={16} className="text-black dark:text-white" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
