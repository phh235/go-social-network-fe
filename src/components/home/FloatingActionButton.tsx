import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { ModalCreatePost } from '../Item/ModalCreatePost'

export function FloatingActionButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <button
        className="w-[82px] border-1 border-[#d9d9d9] dark:border-[#383939] h-[68px] shadow-md flex items-center justify-center rounded-[16px] bg-[#fff] dark:bg-[#181818] text-foreground dark:text-[#f3f5f7] active:scale-100 cursor-pointer hover:scale-110 transition-all duration-200"
        onClick={() => setOpen(true)}
      >
        <Plus size={26} weight="bold" />
      </button>
      <ModalCreatePost open={open} onOpenChange={setOpen} />
    </div>
  )
}
