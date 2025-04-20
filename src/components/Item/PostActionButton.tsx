import { formatNumber } from '@/utils'
import { ReactNode } from 'react'

interface PostActionButtonProps {
  icon: ReactNode
  count?: number
  onClick?: () => void
  isActive?: boolean
  activeColor?: string
}

const PostActionButton = ({
  icon,
  count,
  onClick,
  isActive = false,
  activeColor = '#ff0034',
}: PostActionButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center gap-1 me-1 relative custom-hover-bg rounded-full px-2 py-2 transition-all cursor-pointer outline-none select-none active:scale-90 ${
          isActive
            ? `!text-[${activeColor}]`
            : 'text-[#424242] dark:text-[#cccccc]'
        }`}
      >
        {icon}
        {count !== undefined && (
          <span
            className={`leading-0.5 ${
              isActive
                ? '!text-[#ff0034]'
                : 'text-[#424242] dark:text-[#cccccc]'
            }`}
          >
            {formatNumber(count)}
          </span>
        )}
      </button>
    </>
  )
}

export default PostActionButton
