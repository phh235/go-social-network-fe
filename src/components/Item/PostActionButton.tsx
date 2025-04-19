import { ReactNode } from 'react'

interface PostActionButtonProps {
  icon: ReactNode
  count?: number
  onClick?: () => void
}

const PostActionButton = ({ icon, count, onClick }: PostActionButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-[#424242] dark:text-[#cccccc] relative custom-hover-bg rounded-full px-4 py-1.5 transition-all cursor-pointer"
      >
        {icon}
        {count !== undefined && <span>{count}</span>}
      </button>
    </>
  )
}

export default PostActionButton
