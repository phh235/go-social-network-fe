import { User } from './User'

export interface Post {
  id: string
  user: User
  timePosted: string
  content: string
  likes: number
  comments: number
  reposts: number
  shares: number
  images?: string[] | string
}
