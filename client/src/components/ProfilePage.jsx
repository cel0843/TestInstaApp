function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}

export function ProfilePage({ profile, onShareProfile }) {
  return (
    <div className="space-y-6 px-4 pb-24 text-white">
      <div className="flex items-center gap-4">
        <img src={profile.posts[0].cover} alt="profile avatar" className="h-20 w-20 rounded-full object-cover" loading="lazy" />
        <div className="flex flex-1 items-center justify-between">
          <Stat label="게시물" value={profile.stats.posts} />
          <Stat label="팔로워" value={profile.stats.followers} />
          <Stat label="팔로잉" value={profile.stats.following} />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">{profile.name}</p>
        <p className="text-sm text-white/70">{profile.bio}</p>
        <a
          href={`https://${profile.website}`}
          className="text-sm font-semibold text-sky-400"
          target="_blank"
          rel="noreferrer"
        >
          {profile.website}
        </a>
        <div className="mt-3 flex gap-2 text-sm">
          <button className="flex-1 rounded-2xl bg-white/10 py-2 font-semibold" onClick={() => onShareProfile?.()}>프로필 공유</button>
          <button className="flex-1 rounded-2xl border border-white/20 py-2 font-semibold">프로필 편집</button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {profile.highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center gap-2 text-xs">
            <img src={highlight.cover} alt={highlight.label} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
            <span>{highlight.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-1 rounded-3xl border border-white/10 bg-white/5 p-2 text-xs text-white/60">
        <button className="rounded-2xl bg-white/20 py-2 text-white">게시물</button>
        <button>릴스</button>
        <button>태그됨</button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {profile.posts.map((post) => (
          <button key={post.id} className="relative" onClick={() => onShareProfile?.(post)}>
            <img src={post.cover} alt={post.id} className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
            {post.type === 'reel' && <span className="absolute right-2 top-2 text-lg">🎬</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
