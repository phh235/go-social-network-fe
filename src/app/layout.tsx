import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'

export const metadata = {
  title: 'Go Social',
  description: 'Go Social connects people worldwide.',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get('lang')
  const locale = langCookie?.value === 'vi' ? 'vi' : 'en'
  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
