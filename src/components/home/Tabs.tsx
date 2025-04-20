'use client'

import { DropdownFilterPost } from '@/components/Item/DropdownFilterPost'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MobileTab({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`px-4 py-3 font-bold border-b-[2px] w-full text-center ${
        isActive
          ? 'text-black dark:text-white border-black dark:border-white'
          : 'text-[#999999] dark:text-[#777777] border-[#d1d5dc] dark:border-[#323333]'
      }`}
    >
      {label}
    </Link>
  )
}

export function Tabs() {
  return (
    <>
      {/* Wrapper */}
      <div className="flex justify-center bg-background">
        {/* Desktop */}
        <div className="hidden md:block mb-3 mt-4">
          <div className="flex">
            <span className="font-bold me-5">For you</span>
            <DropdownFilterPost />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative w-full">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" />
          <div className="flex relative z-10 justify-center">
            <MobileTab href="/" label="For you" />
            <MobileTab href="/following" label="Following" />
          </div>
        </div>
      </div>
    </>
  )
}
