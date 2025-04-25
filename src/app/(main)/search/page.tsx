import { CardContent } from '@/components/Card/CardContent'
import { CardSearchInfo } from '@/components/Card/CardSearchInfo'
import { SearchInput } from '@/components/ui/search-input'
import { usersData } from '@/data/usersData'
import { useTranslations } from 'next-intl'

export default function SearchPage() {
  const t = useTranslations()
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CardContent>
        <div className="flex items-center justify-center px-3 md:px-6 py-[18px]">
          <SearchInput placeholder={t('search')} />
        </div>
        <div className="px-3 md:px-6 pb-1">
          <p className="font-bold text-[15px] text-[#999999] dark:text-[#777777]">
            {t('follow_suggestions')}
          </p>
        </div>
        {usersData.map((user) => (
          <CardSearchInfo key={user.id} user={user} />
        ))}
      </CardContent>
    </main>
  )
}
