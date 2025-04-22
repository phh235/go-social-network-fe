import { Activity } from '@/models/Activity'
import { usersData } from './usersData'

export const ActivityData: Activity[] = [
  {
    id: '1',
    user: usersData[0],
    action: 'Follow request',
    actionType: 'follow',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    user: usersData[5],
    action: 'Followed',
    actionType: 'followed',
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    user: usersData[2],
    action: 'Reposted your post',
    actionType: 'reposts',
    timestamp: new Date().toISOString(),
  },
  {
    id: '4',
    user: usersData[3],
    action: 'Followed',
    actionType: 'followed',
    timestamp: new Date().toISOString(),
  },
  {
    id: '5',
    user: usersData[4],
    action: 'Liked your post',
    actionType: 'liked',
    timestamp: new Date().toISOString(),
  },
]
