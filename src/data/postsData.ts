import { Post } from '@/models/Post'
import { User } from '@/models/User'

// Import users data for reference
import { usersData } from './usersData'

export const postsData: Post[] = [
  {
    id: '1',
    user: usersData[0],
    timePosted: 'Just now',
    content: 'Chào mấy chú.',
    likes: 15324234,
    comments: 1113234,
    reposts: 312122,
    shares: 11230,
    images: [
      'https://about.fb.com/wp-content/uploads/2021/10/06_211025_CompanyEC_16x9__30fps__1080-1.gif',
    ],
  },
  {
    id: '2',
    user: usersData[1],
    timePosted: '3h',
    content: 'Hello World!',
    likes: 23504,
    comments: 51,
    reposts: 200,
    shares: 261,
    images: [
      'https://camo.githubusercontent.com/9a25dbf27f91c354e0a9e85268104de67b6ada550d5a4830fee656d2b5d9143d/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f37372f63612f61332f37376361613332383834643733356434333961646534356261333766656166322e676966',
    ],
  },
  {
    id: '3',
    user: usersData[2],
    timePosted: '5h',
    content: 'What is Golang?',
    likes: 87,
    comments: 23,
    reposts: 7,
    shares: 4,
    images: [
      'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165478/Originals/golang%20la%20gi%205.jpeg',
    ],
  },
  {
    id: '4',
    user: usersData[3],
    timePosted: '7h',
    content: 'Business analyst skills.',
    likes: 215,
    comments: 67,
    reposts: 18,
    shares: 12,
    images: [
      'https://images.viblo.asia/361a4007-fbfe-4aff-b04d-c7812dfc45d8.jpg',
      // 'https://edulinks.vn/wp-content/uploads/2020/10/business-analyst-la-gi-1.png',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: '5',
    user: usersData[4],
    timePosted: '12m',
    content: 'Chắc t ký đầu m quá :))',
    likes: 5636,
    comments: 134,
    reposts: 32,
    shares: 10,
    images: [
      'https://drive.inet.vn/uploads/donv@inet.vn/ticketattachments/file-1723784092933_1723784157953.jpg',
    ],
  },
  {
    id: '6',
    user: usersData[5],
    timePosted: '3h',
    content: 'Next.js clean architecture: A guide for scalable apps.',
    likes: 128,
    comments: 45,
    reposts: 12,
    shares: 8,
    images: [
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/bxoLUywRIWcKyZPNXznO',
      'https://hoidanit.vn/images/831943428e6baa517ef865610fbe5ee32.jpeg',
      'https://hiu.vn/wp-content/uploads/2023/05/next-js-training.png',
      'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/nextjs_f42706b59a.jpg',
    ],
  },
]
