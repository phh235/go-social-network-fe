import { useRef, useState, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Images, X } from 'lucide-react'

interface ModalCreatePostProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ModalCreatePost({ open, onOpenChange }: ModalCreatePostProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [images, setImages] = useState<string[]>([])

  const handleInput = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result) {
            setImages((prev) => [...prev, reader.result as string])
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-full h-full md:h-fit md:min-w-[620px] p-0 rounded-none md:rounded-2xl bg-background dark:bg-[#1a1a1a] [&>button:last-child]:hidden">
        <button
          className="absolute top-3 left-6 text-black dark:text-white active:scale-95 cursor-pointer transition-all duration-200"
          onClick={() => onOpenChange(false)}
        >
          <span>Cancel</span>
        </button>
        <DialogHeader className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] p-4 py-4">
          <DialogTitle className="text-center">New threads</DialogTitle>
        </DialogHeader>
        <div className="flex px-6">
          <Avatar className="w-9 h-9">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-[15px] ml-2.5 w-full">
            <span className="font-bold">_andrewhhh</span>
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              rows={1}
              className="border-0 shadow-none outline-0 w-full resize-none bg-transparent overflow-hidden"
              placeholder="What's new?"
            />
          </div>
        </div>
        {images.length > 0 && (
          <div className="ml-18 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
            <div className="flex gap-2 w-fit pr-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-28 h-28 flex items-center justify-center bg-gray-100 dark:bg-[#333] rounded-md border dark:border-[#333]"
                >
                  <img
                    src={img}
                    alt={`uploaded-${idx}`}
                    className="max-w-full max-h-full object-contain select-none"
                  />
                  <button
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 p-1 bg-[#8c8b88] dark:bg-[#707874] rounded-full text-white active:scale-95 cursor-pointer"
                    aria-label="Remove image"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="ml-18 -mt-2">
          <label className="cursor-pointer text-[#999999] dark:text-[#777777] flex items-center">
            <div className="flex items-center transition-all active:scale-95">
              <Images size={18} className="me-1" />
              {images.length > 0 ? (
                <span className="text-[15px]">Add</span>
              ) : (
                ''
              )}
            </div>
            <input
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <DialogFooter className="border-t-1 border-[#d5d5d5] dark:border-[#2d2d2d] p-4 py-4 mt-auto flex flex-row items-center justify-between md:justify-between">
          <div className="text-[15px] text-[#999999] dark:text-[#777777]">
            Your followers can reply & quote
          </div>
          <Button
            variant={'outline'}
            className="w-fit bg-white dark:bg-[#1a1a1a] font-bold"
          >
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
