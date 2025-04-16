import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CaretDown } from '@phosphor-icons/react'

export function DropdownFilterPost() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-1 border-gray-300 outline-0 bg-white transition-all duration-200 ease-in-out flex items-center justify-center text-gray-700 text-sm font-medium p-1 cursor-pointer shadow-sm">
          <CaretDown size={16} weight="bold" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-2xl">
        <DropdownMenuGroup className="p-0.5">
          <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3">
            For you
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3">
            Following
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded-[12px] text-[15px] font-bold py-3">
            Liked
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
