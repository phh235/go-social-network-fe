import { DropdownMenuList } from '../Item/DropdownMenuList'

const Header = () => {
  return (
    <div className="flex justify-center items-center h-16 md:hidden bg-[#fafafa] dark:bg-[#0a0a0a] sticky top-0 z-50">
      <p className="absolute left-1/2 -translate-x-1/2">Logo</p>
      <div className="absolute right-4 flex items-center gap-3">
        <DropdownMenuList />
      </div>
    </div>
  )
}

export default Header
