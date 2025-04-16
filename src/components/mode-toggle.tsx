'use client'

import * as React from 'react'
import { Devices, Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-full p-3 font-bold outline-0 cursor-pointer">
          <Sun
            size={18}
            weight="bold"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={18}
            weight="bold"
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="p-1 rounded-2xl">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="cursor-pointer py-2.5 rounded-[12px] text-[15px]"
        >
          <Sun /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="cursor-pointer py-2.5 rounded-[12px] text-[15px]"
        >
          <Moon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="cursor-pointer py-2.5 rounded-[12px] text-[15px]"
        >
          <Devices /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
