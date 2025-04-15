import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Go Social',
  description:
    'Go Social is a social media platform that connects people from all over the world.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
