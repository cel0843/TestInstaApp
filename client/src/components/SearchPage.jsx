export function SearchPage({ query, onQueryChange, topics, onSelectTopic }) {
  const filtered = topics.filter((topic) => {
    if (!query.trim()) return true;
    return topic.title.toLowerCase().includes(query.toLowerCase()) || topic.category.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="space-y-6 px-4 text-[#262626]">
      <div className="rounded-xl bg-[#EFEFEF] p-2 px-4">
        <input
          type="search"
          className="w-full bg-transparent text-sm text-[#262626] placeholder:text-[#8E8E8E] focus:outline-none"
          placeholder="검색"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-1">
        {filtered.map((topic) => (
          <article key={topic.id} className="relative aspect-square">
            <button className="h-full w-full" onClick={() => onSelectTopic(topic)}>
              <img src={topic.cover} alt={topic.title} className="h-full w-full object-cover" loading="lazy" />
            </button>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-3 text-center text-sm text-[#8E8E8E] mt-10">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
