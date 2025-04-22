import { User } from './User'

export interface Activity {
  id: string
  user: User
  action: string,
  actionType: 'follow' | 'followed' | 'liked' | 'commented' | 'mentioned' | 'reposts'
  timestamp: string
  postId?: string
}
