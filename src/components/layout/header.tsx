import { useTranslations } from 'next-intl'
import { DropdownFilterPost } from '../Dropdown/DropdownFilterPost'
import { DropdownMenuList } from '../Dropdown/DropdownMenuList'

const Header = () => {
  const t = useTranslations()
  return (
    <>
      <div className="justify-center items-center h-16 md:hidden flex bg-white dark:bg-[#181818] md:bg-[#fafafa] md:dark:bg-[#0a0a0a] sticky top-0 z-50">
        <p className="absolute left-1/2 -translate-x-1/2">Logo</p>
        <div className="absolute right-4 flex items-center gap-3">
          <DropdownMenuList />
        </div>
      </div>
      <div className="h-16 md:block hidden bg-white dark:bg-[#181818] md:bg-[#fafafa] md:dark:bg-[#0a0a0a] justify-center items-center sticky top-0 z-50">
        <div className="flex absolute left-1/2 -translate-x-1/2 mt-4 font-bold">
          <p className="me-5">{t('follow')}</p>
          <DropdownFilterPost />
        </div>
      </div>
    </>
  )
}

export default Header
