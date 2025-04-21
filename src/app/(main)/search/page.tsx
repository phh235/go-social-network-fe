import { ContentCard } from '@/components/home/ContentCard'
import { SearchCardInfo } from '@/components/Item/SearchCardInfo'
import { SearchInput } from '@/components/ui/search-input'
import { usersData } from '@/data/usersData'

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ContentCard>
        <div className="flex items-center justify-center px-3 md:px-6 py-[18px]">
          <SearchInput placeholder="Search" />
        </div>
        <div className="px-3 md:px-6 pb-6">
          <p className="font-bold text-[15px] text-[#999999] dark:text-[#777777]">
            Follow suggestions
          </p>
        </div>
        {usersData.map((user) => (
          <SearchCardInfo key={user.id} user={user} />
        ))}
      </ContentCard>
    </main>
  )
}
