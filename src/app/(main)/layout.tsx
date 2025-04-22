'use client'

import { ReactNode } from 'react'
import Sidebar from '@/components/layout/sidebar'
import Header from '@/components/layout/header'
import { ButtonFloating } from '@/components/Button/ButtonFloating'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-[76px]">
        <Sidebar />
      </div>
      <main className="flex-1 md:pr-[76px] flex flex-col pb-[64px]">
        <Header />
        <div className="flex flex-col justify-center mt-0 md:mt-1">
          {children}
        </div>
      </main>
      <div className="md:hidden">
        <Sidebar isMobile={true} />
      </div>
      <ButtonFloating />
    </div>
  )
}
