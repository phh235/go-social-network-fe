import { PostCard } from '../Item/PostCard'
import { CreatePostInput } from './CreatePostInput'
import { dummyPosts } from '@/data/dummyPosts'

export function ContentCard() {
  return (
    <div className="shadow-md border-1 bg-[#fff] dark:bg-[#181818] border-[#d5d5d5] dark:border-[#2d2d2d] w-full md:w-[640px] rounded-none md:rounded-3xl">
      <CreatePostInput />
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
