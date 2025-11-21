import { useMemo } from 'react';

export default function TopBar({ user = '이창은' }) {
  const today = useMemo(() => {
    const now = new Date();

    try {
      return new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(now);
    } catch (err) {
      return now.toLocaleDateString('ko-KR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }, []);

  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{today}</p>
          <h2 className="text-3xl font-bold text-slate-950">안녕하세요, {user}님 👋</h2>
          <p className="text-sm text-slate-500">팀 협업 현황과 요청을 한눈에 확인해보세요.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            알림 8
          </button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            내 작업
          </button>
          <button className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
            새 요청 작성
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
        <span className="text-lg">🔎</span>
        <input
          type="search"
          placeholder="검색: 문서, 사람, 태그"
          className="w-full border-none bg-transparent outline-none placeholder:text-slate-400"
        />
      </div>
    </header>
  );
}
