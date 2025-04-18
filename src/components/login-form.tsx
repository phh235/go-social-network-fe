import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-3">
        <div className="grid">
          <Input
            type="email"
            required
            placeholder="Email"
            className="py-6"
          />
        </div>
        <div className="grid">
          <Input
            type="password"
            required
            placeholder="Password"
            className="py-6"
          />
        </div>
        {/* <a
          href="#"
          className="ml-auto text-sm underline-offset-4 hover:underline"
        >
          Forgot password?
        </a> */}
        <Link href="/">
          <Button type="submit" className="w-full py-6">
            Login
          </Button>
        </Link>
      </div>
      <div className="text-center text-sm">
        Don't have an account?{' '}
        <Link
          href="/register"
          className="underline underline-offset-4 font-bold"
        >
          Sign up
        </Link>
      </div>
    </form>
  )
}
