'use client'

import { useState, useEffect } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

function LanguageOption({
  label,
  value,
  isActive,
  onClick,
}: {
  label: string
  value: string
  isActive: boolean
  onClick: (lang: string) => void
}) {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        'relative flex items-center justify-center h-10 md:h-9 font-medium transition-all cursor-pointer',
        label === 'VI' ? "px-[14.88px]" : "px-3",
        isActive
          ? 'text-black dark:text-white'
          : 'text-[#b8b8b8] hover:text-black dark:text-zinc-500 dark:hover:text-zinc-50'
      )}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="language-option"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border-[1.5px] border-[#d5d5d5] dark:border-[#2d2d2d]"
        />
      )}
    </button>
  )
}

export function SwitchLanguage() {
  const router = useRouter()
  const [lang, setLang] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = getCookie('lang') || 'en'
    setLang(saved as string)
    setMounted(true)
  }, [])

  const changeLanguage = (newLang: string) => {
    setCookie('lang', newLang)
    setLang(newLang)
    router.refresh()
  }

  if (!mounted) return <div className="h-8 w-36" />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center overflow-hidden rounded-full bg-background ring-[1.5px] ring-inset ring-[#d5d5d5] dark:ring-[#2d2d2d]"
    >
      {[
        { label: 'EN', value: 'en' },
        { label: 'VI', value: 'vi' },
      ].map((opt) => (
        <LanguageOption
          key={opt.value}
          label={opt.label}
          value={opt.value}
          isActive={lang === opt.value}
          onClick={changeLanguage}
        />
      ))}
    </motion.div>
  )
}
