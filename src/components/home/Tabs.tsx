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
      className={`px-4 py-3 font-bold border-b-2 w-full text-center ${
        isActive ? 'text-black border-black' : 'text-[#999999] border-[#d1d5dc]'
      }`}
    >
      {label}
    </Link>
  )
}

export function Tabs() {
  return (
    <>
      {/* Logo on mobile */}
      <p className="text-center m-3 block md:hidden">Logo</p>

      {/* Wrapper */}
      <div className="flex justify-center">
        {/* Desktop */}
        <div className="hidden md:block mb-3 mt-4">
          <div className="flex">
            <span className="font-bold me-5">For you</span>
            <DropdownFilterPost />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative w-full mb-5">
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
