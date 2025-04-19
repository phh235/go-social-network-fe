'use client'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import React, { JSX, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element
  value: string
  isActive?: boolean
  onClick: (value: string) => void
}) {
  return (
    <button
      className={cn(
        'relative flex size-10 md:size-9 items-center justify-center rounded-full transition-all [&_svg]:size-5 md:[&_svg]:size-[18px] cursor-pointer',
        isActive
          ? 'text-black dark:text-white'
          : 'text-[#b8b8b8] hover:text-black dark:text-zinc-500 dark:hover:text-zinc-50'
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border-1 border-[#d5d5d5] dark:border-[#2d2d2d]"
        />
      )}
    </button>
  )
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: 'system',
  },
  {
    icon: <SunIcon />,
    value: 'light',
  },
  {
    icon: <MoonIcon />,
    value: 'dark',
  },
]

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="flex h-8 w-24" />
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center overflow-hidden rounded-full bg-background ring-[1.5px] ring-[#d5d5d5] ring-inset dark:ring-[#2d2d2d]"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  )
}

export { ThemeSwitcher }
