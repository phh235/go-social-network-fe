import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register to your account</h1>
      </div>
      <div className="grid gap-3">
        <div className="grid">
          <Input
            id="email"
            type="email"
            required
            placeholder="Email"
            className="py-6"
          />
        </div>
        <div className="grid">
          <Input
            id="username"
            type="text"
            required
            placeholder="Username"
            className="py-6"
          />
        </div>
        <div className="grid">
          <div className="flex items-center"></div>
          <Input
            id="password"
            type="password"
            required
            placeholder="Password"
            className="py-6"
          />
        </div>
        <div className="grid">
          <div className="flex items-center"></div>
          <Input
            id="confirm-password"
            type="password"
            required
            placeholder="Confirm Password"
            className="py-6"
          />
        </div>
        <Button type="submit" className="w-full py-6">
          Sign up
        </Button>
      </div>
      <div className="text-center text-sm">
        Have an account?{' '}
        <Link href="/login" className="underline underline-offset-4 font-bold">
          Login
        </Link>
      </div>
    </form>
  )
}
