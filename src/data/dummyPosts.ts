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
  images?: string[] | string // Can be a single image URL or an array of image URLs
}

export const dummyPosts: Post[] = [
  {
    id: '1',
    username: '_andrewhhh',
    fullName: 'Phan Huy Hoàng',
    avatarUrl: 'https://github.com/shadcn.png',
    timePosted: '3h',
    content:
      'Just launched a new React component library for my latest project. Check it out and let me know what you think!',
    followers: 2354,
    occupation: 'Frontend Developer',
    company: 'aubedev',
    likes: 128,
    comments: 45,
    reposts: 12,
    shares: 8,
    images:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    username: 'minh_dev',
    fullName: 'Nguyen Van Minh',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    timePosted: '5h',
    content:
      'Working on a new Next.js project using server components. The DX is absolutely amazing! Has anyone else been experimenting with React Server Components?',
    followers: 1458,
    occupation: 'Full Stack Developer',
    company: 'TechVision',
    likes: 87,
    comments: 23,
    reposts: 7,
    shares: 4,
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: '3',
    username: 'linh_designer',
    fullName: 'Tran Thuy Linh',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    timePosted: '7h',
    content:
      'Just finished a UI redesign for a financial app. Minimalist design with a focus on usability and accessibility. What design trends are you all following these days?',
    followers: 3245,
    occupation: 'UI/UX Designer',
    company: 'DesignHub',
    likes: 215,
    comments: 67,
    reposts: 18,
    shares: 12,
    images: [
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: '4',
    username: 'quang_code',
    fullName: 'Le Minh Quang',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    timePosted: '11h',
    content:
      'Finally migrated our legacy codebase to TypeScript. It was a lot of work, but the type safety is definitely worth it. What do you think about TypeScript vs JavaScript?',
    followers: 978,
    occupation: 'Backend Developer',
    company: 'CodeCraft',
    likes: 65,
    comments: 38,
    reposts: 5,
    shares: 2,
    images:
      'https://images.unsplash.com/photo-1517430816045-df4b7de7c1a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '5',
    username: 'thu_ux',
    fullName: 'Nguyen Thanh Thu',
    avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    timePosted: '1d',
    content:
      'Conducted user testing today for our new mobile app. Got some valuable feedback that will help us improve the flow. Remember: always test with real users!',
    followers: 1756,
    occupation: 'UX Researcher',
    company: 'UserFirst',
    likes: 142,
    comments: 29,
    reposts: 14,
    shares: 7,
    images:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHRlc3Rpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '6',
    username: 'duc_mobile',
    fullName: 'Pham Van Duc',
    avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
    timePosted: '1d',
    content:
      "Just published my first Flutter app on both App Store and Google Play. Cross-platform development has come a long way! What's your preferred mobile dev framework?",
    followers: 1121,
    occupation: 'Mobile Developer',
    company: 'AppWave',
    likes: 98,
    comments: 42,
    reposts: 8,
    shares: 5,
    images:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '7',
    username: 'mai_product',
    fullName: 'Tran Thi Mai',
    avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    timePosted: '2d',
    content:
      "Product roadmap planning session today. It's challenging to balance user needs with business goals, but that's what makes product management exciting! Any fellow PMs with tips to share?",
    followers: 2467,
    occupation: 'Product Manager',
    company: 'ProductLab',
    likes: 176,
    comments: 53,
    reposts: 21,
    shares: 15,
    images:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '8',
    username: 'tuan_ai',
    fullName: 'Nguyen Anh Tuan',
    avatarUrl: 'https://randomuser.me/api/portraits/men/81.jpg',
    timePosted: '2d',
    content:
      'Just finished training a new NLP model for Vietnamese text analysis. The results are promising! Anyone else working on language-specific ML models?',
    followers: 3567,
    occupation: 'ML Engineer',
    company: 'AICore',
    likes: 245,
    comments: 78,
    reposts: 32,
    shares: 27,
    images:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '9',
    username: 'huong_qa',
    fullName: 'Le Thi Huong',
    avatarUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    timePosted: '3d',
    content:
      'Set up a new automated testing pipeline using Cypress and GitHub Actions. Test coverage increased by 40%. What testing frameworks are you all using?',
    followers: 943,
    occupation: 'QA Engineer',
    company: 'TestPro',
    likes: 87,
    comments: 25,
    reposts: 7,
    shares: 3,
    images:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZyUyMGZyYW1ld29ya3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '10',
    username: 'son_devops',
    fullName: 'Tran Van Son',
    avatarUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
    timePosted: '3d',
    content:
      'Just migrated our entire infrastructure to Kubernetes. Deployment time down by 70% and much better scalability. DevOps is all about continuous improvement!',
    followers: 1876,
    occupation: 'DevOps Engineer',
    company: 'CloudScale',
    likes: 132,
    comments: 47,
    reposts: 19,
    shares: 11,
    images:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
]
