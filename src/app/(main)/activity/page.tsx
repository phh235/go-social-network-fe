import { CardActivity } from '@/components/Card/CardActivity'
import { CardContent } from '@/components/Card/CardContent'
import { ActivityData } from '@/data/ActivityData'

export default function ActivityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CardContent>
        {ActivityData.map((activity) => (
          <CardActivity key={activity.id} activity={activity} />
        ))}
      </CardContent>
    </main>
  )
}
