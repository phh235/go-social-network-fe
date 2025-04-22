'use client'

import {
  House,
  MagnifyingGlass,
  Plus,
  Heart,
  User,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DialogCreatePost } from '../Dialog/DialogCreatePost'
import { DropdownMenuList } from '../Dropdown/DropdownMenuList'

const Sidebar = ({ isMobile = false }: { isMobile?: boolean }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkStyles =
    'relative group w-[60px] h-[48px] flex items-center justify-center rounded-[12px] cursor-pointer overflow-hidden transition-all duration-200 text-[#b8b8b8] dark:text-[#4d4d4d] custom-hover-bg active:scale-90'
  const buttonStyles =
    'w-[70px] md:w-[60px] flex items-center justify-center rounded-[12px] bg-[#f0f0f0] dark:bg-[#171717] text-[#939393] dark:text-[#7e7e7e] hover:text-foreground dark:hover:text-[#f4f5f7] cursor-pointer transition-all duration-200'

  const navLinks = [
    {
      href: '/',
      icon: <House size={26} weight={pathname === '/' ? 'fill' : 'bold'} />,
      active: pathname === '/',
    },
    {
      href: '/search',
      icon: (
        <MagnifyingGlass
          size={26}
          weight={pathname === '/search' ? 'bold' : 'bold'}
        />
      ),
      active: pathname === '/search',
    },
    {
      href: null,
      icon: <Plus size={26} weight="bold" />,
      isButton: true,
    },
    {
      href: '/activity',
      icon: (
        <Heart size={26} weight={pathname === '/activity' ? 'fill' : 'bold'} />
      ),
      active: pathname === '/activity',
    },
    {
      href: '/profile',
      icon: (
        <User size={26} weight={pathname === '/profile' ? 'fill' : 'bold'} />
      ),
      active: pathname === '/profile',
    },
  ]

  if (isMobile) {
    return (
      <div className="w-full h-[62px] smTablet:h-[76px] bg-background dark:bg-[#111214] border-t flex flex-row items-center justify-between px-2 py-0 fixed bottom-0 left-0 z-50">
        {navLinks.map((link, index) => {
          if (link.isButton) {
            return (
              <button
                key={index}
                className={`${buttonStyles} h-[45px]`}
                onClick={() => setOpen(true)}
              >
                <span className="relative z-10">{link.icon}</span>
              </button>
            )
          }

          return (
            <Link
              key={index}
              href={link.href || '#'}
              className={`${linkStyles} ${link.active ? 'text-black dark:text-[#f4f5f7]' : ''}`}
            >
              <span className="relative z-10">{link.icon}</span>
            </Link>
          )
        })}
        <DialogCreatePost open={open} onOpenChange={setOpen} />
      </div>
    )
  }

  return (
    <div className="w-[76px] h-screen bg-transparent flex flex-col items-center px-0 py-3 fixed left-0 top-0 z-50">
      <div>logo</div>
      <div className="flex flex-col items-center gap-3 flex-1 justify-center">
        {navLinks.map((link, index) => {
          if (link.isButton) {
            return (
              <button
                key={index}
                className={`${buttonStyles} h-[48px]`}
                onClick={() => setOpen(true)}
              >
                {link.icon}
              </button>
            )
          }

          return (
            <Link
              key={index}
              href={link.href || '#'}
              className={`${linkStyles} ${link.active ? 'text-black dark:text-[#f4f5f7]' : ''}`}
            >
              {link.icon}
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col items-center pb-6">
        <DropdownMenuList />
      </div>
      <DialogCreatePost open={open} onOpenChange={setOpen} />
    </div>
  )
}

export default Sidebar
