import { ReactNode } from 'react'
import Sidebar from '@/components/layout/sidebar'
import Header from '@/components/layout/header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-[76px]">
        <Sidebar />
      </div>
      <main className="flex-1 md:pr-[76px] flex flex-col">
        <Header />
        <div className="flex justify-center">
          <div className="w-full max-w-[640px]">{children}</div>
        </div>
      </main>
      <div className="md:hidden">
        <Sidebar isMobile={true} />
      </div>
    </div>
  )
}
