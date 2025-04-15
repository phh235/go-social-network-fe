'use client'

import { Heart, House, LogIn, Plus, Search, UserRound } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ isMobile = false }: { isMobile?: boolean }) => {
  const pathname = usePathname()

  const linkStyles =
    'w-[60px] h-[48px] flex items-center justify-center rounded-[12px] text-[#b8b8b8] dark:text-[#4d4d4d] hover:bg-[#f0f0f0] dark:hover:bg-[#171717] active:scale-90 cursor-pointer transition-all duration-200'
  const buttonStyles =
    'w-[60px] h-[48px] flex items-center justify-center rounded-[12px] bg-[#f0f0f0] dark:bg-[#171717] text-[#939393] dark:text-[#7e7e7e] hover:text-[#000000] dark:hover:text-[#f4f5f7] active:scale-90 cursor-pointer transition-all duration-200'
  const buttonStylesMobile =
    'w-[90px] h-[45px] flex items-center justify-center rounded-[12px] bg-[#f0f0f0] dark:bg-[#1d1e20] text-[#939393] dark:text-[#7e7e7e] hover:text-[#000000] dark:hover:text-[#f4f5f7] active:scale-90 cursor-pointer transition-all duration-200'

  const navLinks = [
    { href: '/', icon: <House />, active: pathname === '/' },
    { href: '/search', icon: <Search />, active: pathname === '/search' },
    { href: null, icon: <Plus />, isButton: true },
    { href: '/activity', icon: <Heart />, active: pathname === '/activity' },
    { href: '/profile', icon: <UserRound />, active: pathname === '/profile' },
  ]

  if (isMobile) {
    return (
      <div className="w-full h-[76px] bg-[#fafafa] dark:bg-[#111214] border-t flex flex-row items-center justify-between px-2 py-0 fixed bottom-0 left-0 z-50">
        {navLinks.map((link, index) => {
          if (link.isButton) {
            return (
              <button key={index} className={`${buttonStylesMobile}`}>
                {link.icon}
              </button>
            )
          }

          return (
            <Link
              key={index}
              href={link.href || '#'}
              className={`${linkStyles} ${link.active ? 'text-black dark:text-white' : ''}`}
            >
              {link.icon}
            </Link>
          )
        })}

        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    )
  }

  return (
    <div className="w-[76px] h-screen bg-transparent flex flex-col items-center px-2 py-3 fixed left-0 top-0 z-50">
      <div>logo</div>
      <div className="flex flex-col items-center gap-4 flex-1 justify-center">
        {navLinks.map((link, index) => {
          if (link.isButton) {
            return (
              <button key={index} className={buttonStyles}>
                {link.icon}
              </button>
            )
          }

          return (
            <Link
              key={index}
              href={link.href || '#'}
              className={`${linkStyles} ${link.active ? 'text-black dark:text-white' : ''}`}
            >
              {link.icon}
            </Link>
          )
        })}
      </div>
      <div className="pb-2">
        <ModeToggle />
      </div>
    </div>
  )
}

export default Sidebar
