'use client'

import { Tabs } from '@/components/home/Tabs'
import { ReactNode } from 'react'

interface TabsLayoutProps {
  children: ReactNode
}

export function TabsLayout({ children }: TabsLayoutProps) {
  return (
    <>
      <Tabs />
      {children}
    </>
  )
}