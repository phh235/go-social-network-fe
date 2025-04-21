import { cn } from '@/lib/utils'
import { SearchIcon, Settings2 } from 'lucide-react'
import React from 'react'

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-11 items-center rounded-[16px] border border-input bg-background px-5 w-full',
          className
        )}
      >
        <SearchIcon size={20} className="text-[#b8b8b8] dark:text-[#4d4d4d]" />
        <input
          {...props}
          type="text"
          ref={ref}
          className="w-full px-2 focus-visible:outline-none text-[15px]"
        />
        <Settings2 size={20} className="text-[#b8b8b8] dark:text-[#4d4d4d] cursor-pointer" />
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'

export { SearchInput }
