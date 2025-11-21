import { notifications } from '../data/sampleData.js';

export function NotificationsPage({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/70 px-4 pt-16 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/90 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">활동</h2>
          <button onClick={onClose} className="text-sm text-white/60">
            닫기
          </button>
        </div>
        <ul className="mt-4 space-y-3">
          {notifications.map((item) => (
            <li key={item.id} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
              {item.thumbnail ? (
                <img src={item.thumbnail} alt="썸네일" className="h-12 w-12 rounded-xl object-cover" loading="lazy" />
              ) : (
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-xl">☆</span>
              )}
              <div className="text-sm">
                <p>
                  <span className="font-semibold">{item.user}</span>
                  {item.message}
                </p>
                <p className="text-xs text-white/50">{item.time}</p>
              </div>
              <button className="ml-auto rounded-full border border-white/20 px-4 py-1 text-xs font-semibold">
                {item.type === 'follow' ? '팔로우' : '보기'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
