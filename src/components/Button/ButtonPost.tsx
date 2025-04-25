import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

const ButtonPost = ({ onClick }: { onClick?: () => void }) => {
  const t = useTranslations()
  return (
    <>
      <Button
        variant="outline"
        className="bg-white dark:bg-[#181818] font-bold"
        onClick={onClick}
      >
        {t('post')}
      </Button>
    </>
  )
}

export default ButtonPost
