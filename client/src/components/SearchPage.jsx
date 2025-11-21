export function SearchPage({ query, onQueryChange, topics, onSelectTopic }) {
  const filtered = topics.filter((topic) => {
    if (!query.trim()) return true;
    return topic.title.toLowerCase().includes(query.toLowerCase()) || topic.category.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="space-y-6 px-4 text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <input
          type="search"
          className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          placeholder="검색어, 계정, 태그"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map((topic) => (
          <article key={topic.id} className="rounded-3xl border border-white/5 bg-white/5 shadow-lg">
            <button className="w-full text-left" onClick={() => onSelectTopic(topic)}>
              <img src={topic.cover} alt={topic.title} className="h-40 w-full rounded-3xl object-cover" loading="lazy" />
              <div className="space-y-1 px-3 py-3">
                <p className="text-sm font-semibold">{topic.title}</p>
                <p className="text-xs text-white/60">{topic.category}</p>
              </div>
            </button>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-2 text-center text-sm text-white/50">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
