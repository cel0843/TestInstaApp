import { useState } from 'react';

export function ReelsPage({ reels, onLike, onShare, likedReels = {} }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % reels.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + reels.length) % reels.length);

  const active = reels[current];
  const isLiked = likedReels[active.id];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <article className="relative flex h-screen flex-col justify-between">
        <img src={active.cover} alt={active.title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 top-4 flex justify-center gap-2 px-8">
          {reels.map((reel, index) => (
            <span
              key={reel.id}
              className={`h-1 flex-1 rounded-full ${index <= current ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col gap-2 px-5 pb-28">
          <p className="text-sm font-semibold text-white/80">{active.creator}</p>
          <p className="text-xl font-bold">{active.title}</p>
          <p className="text-sm text-white/70">🎵 {active.music}</p>
        </div>
        <div className="absolute bottom-16 right-4 z-10 flex flex-col items-center gap-6 text-2xl">
          <button onClick={() => onLike?.(active.id)} className={isLiked ? 'text-rose-400' : ''} aria-label="좋아요">
            {isLiked ? '♥' : '♡'}
          </button>
          <p className="text-xs">{active.likes}</p>
          <button onClick={() => onShare?.(active.id)} aria-label="공유">
            💬
          </button>
          <p className="text-xs">{active.comments}</p>
          <button onClick={handleNext}>↗</button>
        </div>
        <div className="absolute inset-y-0 left-0 w-1/2" onClick={handlePrev} aria-hidden />
        <div className="absolute inset-y-0 right-0 w-1/2" onClick={handleNext} aria-hidden />
      </article>
    </div>
  );
}
