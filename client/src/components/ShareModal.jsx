const shareTargets = ['스토리', '릴스', '메시지', '링크 복사'];
const contacts = ['지수', '현우', 'EAST STUDIO', '해린'];

export function ShareModal({ onClose, context }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/90">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="text-sm font-semibold">공유</p>
          <button onClick={onClose} className="text-sm text-white/60">
            닫기
          </button>
        </div>
        <div className="px-4 py-5">
          {context && (
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
              <p className="font-semibold">{context.title}</p>
              {context.subtitle && <p className="text-white/60">{context.subtitle}</p>}
            </div>
          )}
          <div className="grid grid-cols-4 gap-3">
            {shareTargets.map((target) => (
              <button key={target} className="rounded-2xl border border-white/10 bg-white/5 py-4 text-xs font-semibold">
                {target}
              </button>
            ))}
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/40">RECENTS</p>
          <div className="mt-3 space-y-3">
            {contacts.map((contact) => (
              <button
                key={contact}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              >
                <span>{contact}</span>
                <span className="text-xs text-white/50">보내기</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
