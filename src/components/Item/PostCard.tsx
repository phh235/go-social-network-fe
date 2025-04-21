'use client'

import { Heart, MessageCircle, Plus } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { HoverCardInfo } from './HoverCardInfo'
import PostActionButton from './PostActionButton'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useState } from 'react'
import { RepostDropdown } from './RepostDropdown'
import { ShareDropdown } from './ShareDropdown'
import { toastInfo } from '@/utils'
import { ModalCardInfo } from './ModalCardInfo'
import { Post } from '@/models/Post'
import { User } from '@/models/User'
import { DropdownPostList } from './DropdownPostList'

interface PostCardProps {
  post: Post
  user: User
}

export function PostCard({ post, user }: PostCardProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>()
  const [isDragging, setIsDragging] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState<number>(post.likes || 0)
  const [startX, setStartX] = useState(0)
  const [moved, setMoved] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1)
    } else {
      setLikesCount((prev) => prev + 1)
    }
    setIsLiked((prev) => !prev)
  }

  const handleComment = () => {
    toastInfo('Upcoming feature!')
  }

  const normalizeImages = (images: string | string[] | undefined): string[] => {
    if (!images) return []
    return Array.isArray(images) ? images : [images]
  }

  const images = normalizeImages(post.images)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setStartX(e.clientX)
    setIsDragging(true)
    setMoved(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = Math.abs(e.clientX - startX)
      if (deltaX > 5) {
        setMoved(true)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (moved) {
      e.preventDefault()
      e.stopPropagation()
      setMoved(false)
      return false
    }
    return true
  }

  return (
    <>
      <div className="border-b-1 border-[#d5d5d5] dark:border-[#2d2d2d] last:border-b-0">
        <div className="flex justify-between px-3 md:px-6 py-3">
          <div className="relative w-12 h-12">
            <Avatar className="w-9 h-9 border-[1px] border-[#d9d9d9] dark:border-[#383939]">
              <AvatarImage
                src={user.avatarUrl}
                alt={`${user.username}'s Avatar`}
              />
              <AvatarFallback>
                {user.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <ModalCardInfo
              user={user}
              trigger={
                <button className="absolute bottom-2.5 right-2 bg-black dark:bg-white text-white dark:text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#181818] cursor-pointer transition-all duration-200 hover:scale-110 active:scale-100">
                  <Plus className="w-3 h-3 text-white dark:text-black" />
                </button>
              }
            />
          </div>
          <div className="flex flex-col text-[15px] ml-1 flex-1 min-w-0">
            <div className="flex items-start justify-between -mb-3.5 -mt-1">
              <div>
                <HoverCardInfo user={user} />
                <span className="font-medium text-[#999999] dark:text-[#777777] ms-2">
                  {post.timePosted}
                </span>
              </div>
              <div>
                <DropdownPostList />
              </div>
            </div>
            <span className="border-0 shadow-none outline-0 w-full resize-none bg-transparent overflow-hidden">
              {post.content}
            </span>
            {/* Images display with PhotoView gallery */}
            {images.length > 0 && (
              <div
                ref={images.length !== 2 ? scrollRef : undefined}
                className={`mt-2 ${images.length !== 2 ? '-ml-3 md:-ml-6 w-[calc(100%+12px)] md:w-[calc(100%+24px)]' : 'w-full'} ${images.length !== 2 ? 'overflow-x-auto' : ''} max-w-none overflow-y-hidden scrollbar-hide`}
                onMouseMove={images.length !== 2 ? handleMouseMove : undefined}
                onMouseUp={images.length !== 2 ? handleMouseUp : undefined}
                onMouseLeave={images.length !== 2 ? handleMouseUp : undefined}
                style={{
                  cursor:
                    isDragging && images.length !== 2
                      ? 'grabbing'
                      : images.length !== 2
                        ? 'grab'
                        : 'default',
                }}
              >
                <div
                  className={`flex gap-2 ${images.length === 2 ? 'w-full justify-between' : images.length === 1 ? 'w-full' : 'w-[300px] md:w-full'} ${images.length !== 2 ? 'pl-3 md:pl-6' : ''}`}
                >
                  <PhotoProvider speed={() => 500}>
                    {images.map((image, index) => (
                      <div
                        key={`${post.id}-image-${index}`}
                        className={`relative flex-shrink-0 ${
                          images.length === 1
                            ? 'w-full md:max-w-full'
                            : images.length === 2
                              ? 'w-[calc(50%-4px)] md:w-[calc(50%-4px)]'
                              : 'min-w-[200px] w-[250px] md:w-[300px]'
                        } ${images.length === 1 ? 'max-h-[500px]' : 'h-[320px]'} overflow-hidden rounded-[8px] transition-all duration-200 active:scale-95`}
                        onMouseDown={
                          images.length !== 2 ? handleMouseDown : undefined
                        }
                      >
                        <div
                          className={`${images.length >= 3 ? 'cursor-grab' : 'cursor-pointer'} w-full h-full`}
                          onClick={(e) =>
                            images.length !== 2 ? handleClick(e) : null
                          }
                        >
                          {!moved || images.length === 2 ? (
                            <PhotoView
                              key={`${post.id}-photoview-${index}`}
                              src={image}
                            >
                              <img
                                src={image}
                                alt={`Post image ${index + 1}`}
                                className={`w-full ${images.length === 1 ? 'h-auto' : 'h-full'} ${images.length === 1 ? 'object-contain' : 'object-cover'}`}
                                draggable={false}
                                loading="lazy"
                              />
                            </PhotoView>
                          ) : (
                            <img
                              src={image}
                              alt={`Post image ${index + 1}`}
                              className={`w-full ${images.length === 1 ? 'h-auto' : 'h-full'} ${images.length === 1 ? 'object-contain' : 'object-cover'}`}
                              draggable={false}
                              loading="lazy"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </PhotoProvider>
                </div>
              </div>
            )}
            <div className="flex items-center gap-0.5 mt-2 -ml-2">
              <PostActionButton
                icon={<Heart size={16} fill={isLiked ? '#ff0034' : 'none'} />}
                count={likesCount}
                onClick={handleLike}
                isActive={isLiked}
                activeColor="#ff0034"
              />
              <PostActionButton
                icon={<MessageCircle size={16} />}
                count={post.comments}
                onClick={handleComment}
              />
              <RepostDropdown count={post.reposts} postId={post.id} />
              <ShareDropdown count={post.shares} postId={post.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
