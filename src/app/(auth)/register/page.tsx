'use client'
import { RegisterForm } from '@/components/register-form'
import { GalleryVerticalEnd } from 'lucide-react'
import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
