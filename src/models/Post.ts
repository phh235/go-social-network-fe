export interface Post {
  id: string
  username: string
  fullName: string
  avatarUrl: string
  timePosted: string
  content: string
  followers: number
  occupation: string
  company: string
  likes: number
  comments: number
  reposts: number
  shares: number
  images?: string[] | string
  isVerified?: boolean
}
