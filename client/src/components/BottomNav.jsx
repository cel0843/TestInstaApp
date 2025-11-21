const tabs = [
  { id: 'home', label: '홈', icon: '⌂' },
  { id: 'search', label: '검색', icon: '🔍' },
  { id: 'create', label: '만들기', icon: '➕' },
  { id: 'reels', label: '릴스', icon: '🎬' },
  { id: 'profile', label: '프로필', icon: '👤' }
];

export function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t border-white/10 bg-black/80 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center gap-1 px-3 py-1 transition ${
              tab.id === activeTab ? 'text-white' : 'hover:text-white'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="text-xl" aria-hidden>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
