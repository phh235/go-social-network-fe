'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu'
import useIsMobile from '@/helper'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeSwitcher } from '../theme-switcher'
import { SwitchLanguage } from '../Item/SwitchLanguage'

export function DropdownMenuList() {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <MenuIcon
            size={24}
            className={`transition-all duration-200 ease-in-out cursor-pointer ${
              open
                ? 'text-black dark:text-white'
                : 'text-[#b8b8b8] hover:text-black dark:hover:text-white dark:text-[#4d4d4d]'
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`w-58 rounded-2xl ${isMobile ? 'mr-2 mt-2' : 'ml-2 mb-2'}`}
      >
        <DropdownMenuGroup className="p-0.5">
          <div className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 h-[55px] px-3 flex items-center justify-between">
            <span>Theme</span> <ThemeSwitcher />
          </div>
          <div className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 h-[55px] px-3 flex items-center justify-between">
            <span>Language</span> <SwitchLanguage />
          </div>
          <Link href="/login">
            <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3.5 px-3 flex justify-between">
              <span className="text-[#ff3040]">Log out</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
