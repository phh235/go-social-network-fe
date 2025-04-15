import { ReactNode } from 'react'
import Sidebar from '@/components/layout/sidebar'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <div className="hidden md:block w-[76px]">
        <Sidebar />
      </div>
      <main className="flex-1 md:pr-[76px] flex justify-center">
        <div className="w-full max-w-[640px]">{children}</div>
      </main>
      <div className="md:hidden">
        <Sidebar isMobile={true} />
      </div>
    </div>
  )
}
