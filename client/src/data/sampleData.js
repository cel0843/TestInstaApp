const gradient = (value) => value;

export const stories = [
  {
    id: 'story-1',
    name: '지수',
    handle: 'jisoo.art',
    isLive: true,
    ring: gradient('from-[#feda75] via-[#fa7e1e] to-[#d62976]'),
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-2',
    name: '현우',
    handle: 'hyunwoo.fx',
    isLive: false,
    ring: gradient('from-[#4facfe] to-[#00f2fe]'),
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-3',
    name: '민아',
    handle: 'mina.vibes',
    isLive: false,
    ring: gradient('from-[#a18cd1] to-[#fbc2eb]'),
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-4',
    name: 'EAST STUDIO',
    handle: 'eaststudio',
    isLive: true,
    ring: gradient('from-[#f83600] to-[#f9d423]'),
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-5',
    name: '해린',
    handle: 'haerin.st',
    isLive: false,
    ring: gradient('from-[#00c9ff] to-[#92fe9d]'),
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-6',
    name: '상우',
    handle: 'sangwoo.exe',
    isLive: false,
    ring: gradient('from-[#f093fb] to-[#f5576c]'),
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const posts = [
  {
    id: 'post-1',
    name: 'EAST STUDIO',
    username: 'eaststudio',
    location: '서울 성수동 · Seoul',
    userImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    likes: '12,487',
    caption: '새로운 네온 톤 UI 실험 중. 색감 피드백 부탁해요! #design #prototype',
    time: '2시간 전',
    comments: [
      { id: 'c-1', user: 'yeji', text: '그래디언트 전환이 부드럽네요 🔥' },
      { id: 'c-2', user: 'dan', text: '폰트와 조화가 좋네요' }
    ]
  },
  {
    id: 'post-2',
    name: 'midnight.lab',
    username: 'midnight.lab',
    location: '부산 해운대',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    media: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    likes: '48,201',
    caption: '오늘 밤 촬영한 네온 사인. 색 대비 테스트 중! ✨',
    time: '5시간 전',
    comments: [
      { id: 'c-3', user: 'eunsol', text: '필름톤이라 더 감성적이에요' }
    ]
  },
  {
    id: 'post-3',
    name: '라이트하우스',
    username: 'lighthouse',
    location: 'Jeju, Korea',
    userImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    media: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
    likes: '8,902',
    caption: '제주 새벽빛 테스트. 노이즈 없이 촬영 성공 ☕',
    time: '어제',
    comments: [
      { id: 'c-4', user: 'arin', text: '공기까지 담긴 느낌 💙' }
    ]
  }
];

export const exploreTopics = [
  { id: 'topic-1', title: '네온 모션', category: '모션', cover: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80' },
  { id: 'topic-2', title: '필름 스틸', category: '필름', cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' },
  { id: 'topic-3', title: '브랜딩', category: '아이덴티티', cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' },
  { id: 'topic-4', title: '아트북', category: '출판', cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' },
  { id: 'topic-5', title: '패션 필름', category: '패션', cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80' },
  { id: 'topic-6', title: '메타휴먼', category: '3D', cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' }
];

export const notifications = [
  { id: 'noti-1', type: 'like', user: 'haerin.st', message: '님이 회원님의 게시물을 좋아합니다', time: '5분 전', thumbnail: posts[0].media },
  { id: 'noti-2', type: 'follow', user: 'studio.m', message: '님이 회원님을 팔로우하기 시작했습니다', time: '12분 전' },
  { id: 'noti-3', type: 'comment', user: 'yeji', message: '님이 댓글을 남겼습니다: “빛감 미쳤다!”', time: '1시간 전', thumbnail: posts[1].media }
];

export const conversations = [
  { id: 'dm-1', user: '지수', handle: 'jisoo.art', snippet: '새 시안 어떻게 생각해?', unread: 2, avatar: stories[0].avatar, time: '1분 전' },
  { id: 'dm-2', user: '현우', handle: 'hyunwoo.fx', snippet: '촬영 일정 공유했어.', unread: 0, avatar: stories[1].avatar, time: '10분 전' },
  { id: 'dm-3', user: 'EAST STUDIO', handle: 'eaststudio', snippet: '네온 라이팅 참고 보낼게요.', unread: 0, avatar: stories[3].avatar, time: '어제' }
];

export const reels = [
  {
    id: 'reel-1',
    title: 'Synth wave study',
    creator: 'midnight.lab',
    music: 'Night Pulse — EVA',
    likes: '48.4K',
    comments: '1.2K',
    cover: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-2',
    title: 'Studio morning light',
    creator: 'eaststudio',
    music: 'Sunrise echo — JUN',
    likes: '12.1K',
    comments: '304',
    cover: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80'
  }
];

export const profile = {
  username: 'eaststudio',
  name: 'EAST STUDIO',
  bio: 'Neo-noir visuals and concept brand work in Seoul.',
  website: 'eaststudio.studio',
  stats: { posts: 128, followers: '24.3K', following: 842 },
  highlights: [
    { id: 'hl-1', label: 'Neo', cover: posts[0].media },
    { id: 'hl-2', label: 'Film', cover: posts[1].media },
    { id: 'hl-3', label: 'Docs', cover: posts[2].media }
  ],
  posts: [
    { id: 'grid-1', cover: posts[0].media, type: 'photo' },
    { id: 'grid-2', cover: posts[1].media, type: 'reel' },
    { id: 'grid-3', cover: posts[2].media, type: 'photo' },
    { id: 'grid-4', cover: posts[1].media, type: 'reel' },
    { id: 'grid-5', cover: posts[0].media, type: 'photo' },
    { id: 'grid-6', cover: posts[2].media, type: 'photo' }
  ]
};
