function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-[#262626]">{value}</p>
      <p className="text-xs text-[#262626]">{label}</p>
    </div>
  );
}

export function ProfilePage({ profile, onShareProfile }) {
  return (
    <div className="space-y-6 px-4 pb-24 text-[#262626]">
      <div className="flex items-center gap-8 px-2">
        <img src={profile.posts[0].cover} alt="profile avatar" className="h-20 w-20 rounded-full object-cover border border-[#DBDBDB]" loading="lazy" />
        <div className="flex flex-1 items-center justify-between">
          <Stat label="게시물" value={profile.stats.posts} />
          <Stat label="팔로워" value={profile.stats.followers} />
          <Stat label="팔로잉" value={profile.stats.following} />
        </div>
      </div>

      <div className="px-2">
        <p className="text-sm font-semibold">{profile.name}</p>
        <p className="text-sm text-[#262626] whitespace-pre-wrap">{profile.bio}</p>
        <a
          href={`https://${profile.website}`}
          className="text-sm font-semibold text-[#00376B]"
          target="_blank"
          rel="noreferrer"
        >
          {profile.website}
        </a>
        <div className="mt-4 flex gap-2 text-sm font-semibold">
          <button className="flex-1 rounded-lg bg-[#EFEFEF] py-1.5 text-[#262626]" onClick={() => onShareProfile?.()}>프로필 편집</button>
          <button className="flex-1 rounded-lg bg-[#EFEFEF] py-1.5 text-[#262626]">프로필 공유</button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-2 no-scrollbar">
        {profile.highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center gap-1 text-xs">
            <div className="rounded-full border border-[#DBDBDB] p-[2px]">
              <img src={highlight.cover} alt={highlight.label} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
            </div>
            <span className="text-[#262626]">{highlight.label}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-[#DBDBDB]">
        <div className="flex justify-around text-[#8E8E8E]">
          <button className="flex items-center gap-1 border-t border-[#262626] py-3 text-xs font-semibold text-[#262626] uppercase tracking-widest">
            <svg aria-label="" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
              <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
            </svg>
            <span className="hidden sm:inline">게시물</span>
          </button>
          <button className="flex items-center gap-1 py-3 text-xs font-semibold uppercase tracking-widest">
            <svg aria-label="" color="#8E8E8E" fill="#8E8E8E" height="12" role="img" viewBox="0 0 24 24" width="12">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path>
              <path d="M16.276 17.025a1.002 1.002 0 01-.76-.355l-4.515-5.36a1 1 0 010-1.284l4.515-5.359a1.001 1.001 0 011.52 1.283L13.11 11.31l3.926 5.36a1 1 0 01-.76 1.355z"></path>
            </svg>
            <span className="hidden sm:inline">릴스</span>
          </button>
          <button className="flex items-center gap-1 py-3 text-xs font-semibold uppercase tracking-widest">
            <svg aria-label="" color="#8E8E8E" fill="#8E8E8E" height="12" role="img" viewBox="0 0 24 24" width="12">
              <path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
            </svg>
            <span className="hidden sm:inline">태그됨</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {profile.posts.map((post) => (
          <button key={post.id} className="relative aspect-square" onClick={() => onShareProfile?.(post)}>
            <img src={post.cover} alt={post.id} className="h-full w-full object-cover" loading="lazy" />
            {post.type === 'reel' && <span className="absolute right-2 top-2 text-lg">🎬</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
