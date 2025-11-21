const navItems = [
  { label: '대시보드', icon: '🏠' },
  { label: '할 일', icon: '✅' },
  { label: '전자결재', icon: '📝' },
  { label: '일정/예약', icon: '📅' },
  { label: '메시지', icon: '💬' },
  { label: '문서함', icon: '📂' }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col bg-white border-r border-slate-100 p-6 gap-8 min-w-[240px]">
      <div>
        <p className="text-sm font-semibold text-primary-600">TEAMFLOW</p>
        <h1 className="text-2xl font-bold text-slate-950">그룹웨어</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition hover:bg-primary-50 hover:text-primary-600 ${
              item.label === '대시보드' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'
            }`}
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 shadow-lg">
        <p className="text-sm text-primary-100">오늘 회의</p>
        <p className="text-lg font-semibold">Product Sync</p>
        <p className="text-sm text-primary-100">오후 2:30 · 6명 참석</p>
      </div>
    </aside>
  );
}
