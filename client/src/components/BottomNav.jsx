const tabs = [
  {
    id: 'home',
    label: '홈',
    icon: (active) => (
      <svg aria-label="Home" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        {active ? (
          <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
        ) : (
          <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
        )}
      </svg>
    )
  },
  {
    id: 'search',
    label: '검색',
    icon: (active) => (
      <svg aria-label="Search" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? '3' : '2'}></path>
        <line x1="16.511" x2="22" y1="16.511" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? '3' : '2'}></line>
      </svg>
    )
  },
  {
    id: 'create',
    label: '만들기',
    icon: (active) => (
      <svg aria-label="New Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        <line x1="6.545" x2="17.455" y1="12.001" y2="12.001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
        <line x1="12.003" x2="12.003" y1="6.545" y2="17.455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
      </svg>
    )
  },
  {
    id: 'reels',
    label: '릴스',
    icon: (active) => (
      <svg aria-label="Reels" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        {active ? (
          <path d="M20.5 3.48c-1.13 0-2.18.42-2.99 1.13l-.12.12-2.76 2.76c-.39.39-1.02.39-1.41 0l-2.76-2.76a4.26 4.26 0 00-2.99-1.13c-1.13 0-2.18.42-2.99 1.13L1.13 8.08c-.71.81-1.13 1.86-1.13 2.99s.42 2.18 1.13 2.99l3.35 3.35c.81.71 1.86 1.13 2.99 1.13s2.18-.42 2.99-1.13l2.76-2.76c.39-.39 1.02-.39 1.41 0l2.76 2.76c.81.71 1.86 1.13 2.99 1.13s2.18-.42 2.99-1.13l3.35-3.35c.71-.81 1.13-1.86 1.13-2.99s-.42-2.18-1.13-2.99L23.49 4.61a4.26 4.26 0 00-2.99-1.13zM6.6 16.54c-.39.39-1.02.39-1.41 0L1.84 13.19c-.39-.39-.39-1.02 0-1.41L5.19 8.43c.39-.39 1.02-.39 1.41 0l3.35 3.35c.39.39.39 1.02 0 1.41L6.6 16.54zm10.8 0c-.39.39-1.02.39-1.41 0l-3.35-3.35c-.39-.39-.39-1.02 0-1.41l3.35-3.35c.39-.39 1.02-.39 1.41 0l3.35 3.35c.39.39.39 1.02 0 1.41l-3.35 3.35z"></path>
        ) : (
          <path d="M12.87 21.5c-1.13 0-2.18-.42-2.99-1.13l-2.76-2.76a.99.99 0 010-1.41l2.76-2.76c.81-.71 1.86-1.13 2.99-1.13s2.18.42 2.99 1.13l2.76 2.76c.39.39.39 1.02 0 1.41l-2.76 2.76c-.81.71-1.86 1.13-2.99 1.13zM6.6 16.54c-.39.39-1.02.39-1.41 0L1.84 13.19c-.39-.39-.39-1.02 0-1.41L5.19 8.43c.39-.39 1.02-.39 1.41 0l3.35 3.35c.39.39.39 1.02 0 1.41L6.6 16.54zM17.4 8.43c-.39-.39-1.02-.39-1.41 0l-3.35 3.35c-.39.39-.39 1.02 0 1.41l3.35 3.35c.39.39 1.02.39 1.41 0l3.35-3.35c.39-.39.39-1.02 0-1.41L17.4 8.43z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
        )}
      </svg>
    )
  },
  {
    id: 'profile',
    label: '프로필',
    icon: (active) => (
      <div className={`h-6 w-6 rounded-full border ${active ? 'border-[#262626]' : 'border-transparent'}`}>
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80"
          alt="Profile"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    )
  }
];

export function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t border-[#DBDBDB] bg-white px-4 py-3 pb-5">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center justify-center transition-opacity ${tab.id === activeTab ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.icon(tab.id === activeTab)}
          </button>
        ))}
      </div>
    </nav>
  );
}
