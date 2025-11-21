import { conversations } from '../data/sampleData.js';

export function MessengerPage({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/70 px-4 pt-16 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/90 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">메시지</h2>
          <button onClick={onClose} className="text-sm text-white/60">
            닫기
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {conversations.map((chat) => (
            <article key={chat.id} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
              <img src={chat.avatar} alt={chat.user} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
              <div className="flex-1 text-sm">
                <p className="font-semibold">{chat.user}</p>
                <p className="text-white/60">{chat.snippet}</p>
              </div>
              {chat.unread > 0 && (
                <span className="rounded-full bg-rose-500 px-2 py-0.5 text-xs font-semibold">{chat.unread}</span>
              )}
              <span className="text-xs text-white/40">{chat.time}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
