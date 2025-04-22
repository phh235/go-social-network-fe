'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CaretDown } from '@phosphor-icons/react'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function DropdownFilterPost() {
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-1 border-[#d5d5d5] dark:border-[#2d2d2d] outline-0 bg-white dark:bg-[#181818] transition-all duration-200 ease-in-out flex items-center justify-center text-gray-700 text-sm font-medium p-1 cursor-pointer shadow-sm">
          <CaretDown size={16} weight="bold" className="text-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-2xl">
        <DropdownMenuGroup className="p-0.5">
          <Link href="/">
            <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between">
              <span>For you</span>
              {pathname === '/' && <Check className="text-foreground" />}
            </DropdownMenuItem>
          </Link>
          <Link href="/following">
            <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between">
              <span>Following</span>{' '}
              {pathname === '/following' && (
                <Check className="text-foreground" />
              )}
            </DropdownMenuItem>
          </Link>
          <Link href="/liked">
            <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between">
              <span>Liked</span>{' '}
              {pathname === '/liked' && <Check className="text-foreground" />}
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
