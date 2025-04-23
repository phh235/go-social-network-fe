import Link from 'next/link'
import React from 'react'

const TabsProfileChild = ({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) => {
  return (
    <Link
      href={href}
      className={`px-4 py-3 font-bold border-b-[1.5px] w-full text-center ${
        isActive
          ? 'text-black dark:text-white border-black dark:border-white'
          : 'text-[#999999] dark:text-[#777777] border-[#d1d5dc] dark:border-[#323333]'
      }`}
    >
      {label}
    </Link>
  )
}
export default TabsProfileChild
