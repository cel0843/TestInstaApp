export function InstagramHeader({ onLikesClick, onMessengerClick }) {
  return (
    <header className="fixed left-1/2 top-0 z-30 w-full max-w-md -translate-x-1/2 border-b border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between text-white">
        <button aria-label="카메라" className="text-2xl">📷</button>
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">instagram</p>
          <p className="text-2xl font-black tracking-tight">instapreview</p>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <button aria-label="좋아요" onClick={onLikesClick} className="transition hover:scale-110">❤️</button>
          <button aria-label="메신저" onClick={onMessengerClick} className="transition hover:scale-110">
            ✉️
          </button>
        </div>
      </div>
    </header>
  );
}
