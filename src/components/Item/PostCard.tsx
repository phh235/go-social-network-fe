'use client'

import { Heart, MessageCircle, Plus, Repeat, Send } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { HoverCardInfo } from './HoverCardInfo'
import PostActionButton from './PostActionButton'
import { Post } from '@/data/dummyPosts'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useState } from 'react'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>()
  const [isDragging, setIsDragging] = useState(false)

  // Helper function to normalize images into an array
  const normalizeImages = (images: string | string[] | undefined): string[] => {
    if (!images) return []
    return Array.isArray(images) ? images : [images]
  }

  const images = normalizeImages(post.images)

  // Handle manual scroll behavior
  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent default behavior and stop propagation
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleClick = (e: React.MouseEvent, index: number) => {
    // Only open PhotoView if we're not dragging
    if (isDragging) {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      return false
    }
  }

  return (
    <>
      <div className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] last:border-b-0">
        <div className="flex px-3 md:px-6 py-3">
          <div className="relative w-12 h-12">
            <Avatar className="w-9 h-9 border-[1px] border-[#d9d9d9] dark:border-[#383939]">
              <AvatarImage
                src={post.avatarUrl}
                alt={`${post.username}'s Avatar`}
              />
              <AvatarFallback>
                {post.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-2.5 right-2 bg-black dark:bg-white text-white dark:text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#181818] cursor-pointer transition-all duration-200 hover:scale-110 active:scale-100">
              <Plus className="w-3 h-3 text-white dark:text-black" />
            </button>
          </div>
          <div className="flex flex-col text-[15px] ml-3 flex-1 min-w-0 space-y-1">
            <div>
              <HoverCardInfo user={post} />
              <span className="font-medium text-[#999999] dark:text-[#777777] ms-1.5">
                {post.timePosted}
              </span>
            </div>
            <span className="border-0 shadow-none outline-0 w-full resize-none bg-transparent overflow-hidden">
              {post.content}
            </span>

            {/* Images display with PhotoView gallery */}
            {images.length > 0 && (
              <div
                ref={scrollRef}
                className="mt-2 w-full overflow-x-auto max-w-full overflow-y-hidden scrollbar-hide"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div className="flex gap-2 w-[300px] md:w-full">
                  <PhotoProvider speed={() => 500}>
                    {images.map((image, index) => (
                      <div
                        key={`${post.id}-image-${index}`}
                        className={`relative flex-shrink-0 min-w-[200px] ${images.length === 1 ? 'w-full' : 'w-[300px]'} max-h-[300px] overflow-hidden rounded-[8px] transition-all duration-200`}
                        onMouseDown={handleMouseDown}
                      >
                        <div
                          className="cursor-grab w-full h-full"
                          onClick={(e) => handleClick(e, index)}
                        >
                          <PhotoView
                            key={`${post.id}-photoview-${index}`}
                            src={image}
                          >
                            <img
                              src={image}
                              alt={`Post image ${index + 1}`}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                          </PhotoView>
                        </div>
                      </div>
                    ))}
                  </PhotoProvider>
                </div>
              </div>
            )}

            <div className="flex items-center gap-0.5 mt-2">
              <PostActionButton icon={<Heart size={16} />} count={post.likes} />
              <PostActionButton
                icon={<MessageCircle size={16} />}
                count={post.comments}
              />
              <PostActionButton
                icon={<Repeat size={16} />}
                count={post.reposts}
              />
              <PostActionButton icon={<Send size={16} />} count={post.shares} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
