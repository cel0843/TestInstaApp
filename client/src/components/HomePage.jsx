import { useState } from 'react';

function StoryBubble({ story, onClick }) {
  return (
    <button className={`flex flex-col items-center gap-2 text-xs text-white/80 ${story.viewed ? 'opacity-60' : ''}`} onClick={() => onClick(story)}>
      <span className={`rounded-full bg-gradient-to-tr ${story.ring} p-[3px]`}>
        <span className="block rounded-full bg-black p-[2px]">
          <img src={story.avatar} alt={`${story.name} avatar`} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
        </span>
      </span>
      <span className="font-medium">{story.name}</span>
      <span className="text-[11px] text-white/50">@{story.handle}</span>
    </button>
  );
}

function PostActions({ liked, saved, onLike, onComment, onShare, onSave }) {
  return (
    <div className="flex items-center justify-between text-2xl">
      <div className="flex items-center gap-4">
        <button className={`transition hover:scale-110 ${liked ? 'text-rose-400' : ''}`} aria-label="좋아요" onClick={onLike}>
          {liked ? '♥' : '♡'}
        </button>
        <button className="transition hover:scale-110" aria-label="댓글" onClick={onComment}>
          💬
        </button>
        <button className="transition hover:scale-110" aria-label="공유" onClick={onShare}>
          ↗
        </button>
      </div>
      <button className={`transition hover:scale-110 ${saved ? 'text-sky-300' : ''}`} aria-label="저장" onClick={onSave}>
        {saved ? '📌' : '🔖'}
      </button>
    </div>
  );
}

function PostCard({
  post,
  commentValue,
  onCommentDraft,
  onSubmitComment,
  onViewComments,
  onShareClick,
  onToggleLike,
  onToggleSave
}) {
  return (
    <article className="rounded-[32px] border border-white/5 bg-white/5 shadow-[0_30px_60px_rgba(5,5,5,0.45)]">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={post.userImage} alt={post.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
          <div className="leading-tight text-white">
            <p className="text-sm font-semibold">{post.name}</p>
            <p className="text-xs text-white/60">@{post.username}</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">{post.location}</p>
          </div>
        </div>
        <button className="text-2xl text-white/60" aria-label="더보기">
          ⋮
        </button>
      </header>
      <div className="px-4">
        <div className="h-96 w-full overflow-hidden rounded-[28px]">
          <img src={post.media} alt={`${post.name} post`} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="px-4 pb-5 pt-3 text-white">
        <PostActions
          liked={post.liked}
          saved={post.saved}
          onLike={() => onToggleLike(post.id)}
          onComment={() => onViewComments(post)}
          onShare={() => onShareClick(post)}
          onSave={() => onToggleSave(post.id)}
        />
        <p className="mt-3 text-sm font-semibold">좋아요 {post.likesCount.toLocaleString('en-US')}개</p>
        <p className="mt-1 text-sm text-white/90">
          <span className="font-semibold text-white">{post.name}</span> {post.caption}
        </p>
        <button className="mt-2 text-xs font-medium text-white/60" onClick={() => onViewComments(post)}>
          댓글 {post.comments.length}개 모두 보기
        </button>
        <ul className="mt-1 space-y-1 text-sm">
          {post.comments.slice(0, 2).map((comment) => (
            <li key={comment.id}>
              <span className="font-semibold text-white">{comment.user}</span> {comment.text}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40">{post.time}</p>
        <div className="mt-3 flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">☺</span>
          <input
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            placeholder="댓글 달기..."
            value={commentValue}
            onChange={(event) => onCommentDraft(post.id, event.target.value)}
          />
          <button
            className="text-xs font-semibold text-sky-400 disabled:text-white/30"
            onClick={() => onSubmitComment(post.id)}
            disabled={!commentValue.trim()}
          >
            게시
          </button>
        </div>
      </div>
    </article>
  );
}

export function HomePage({
  stories,
  posts,
  onStoryClick,
  onToggleLike,
  onToggleSave,
  onCommentClick,
  onShareClick,
  onAddComment
}) {
  const [drafts, setDrafts] = useState({});

  const handleDraftChange = (postId, value) => {
    setDrafts((prev) => ({ ...prev, [postId]: value }));
  };

  const handleSubmit = (postId) => {
    const content = (drafts[postId] || '').trim();
    if (!content) return;
    onAddComment(postId, content);
    setDrafts((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="space-y-6 text-white">
      <section className="flex gap-4 overflow-x-auto px-2">
        {stories.map((story) => (
          <StoryBubble key={story.id} story={story} onClick={onStoryClick} />
        ))}
      </section>

      <section className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            commentValue={drafts[post.id] ?? ''}
            onCommentDraft={handleDraftChange}
            onSubmitComment={handleSubmit}
            onViewComments={(selectedPost) =>
              onCommentClick({
                id: selectedPost.id,
                username: selectedPost.username,
                userImage: selectedPost.userImage,
                caption: selectedPost.caption,
                comments: selectedPost.comments
              })
            }
            onShareClick={() => onShareClick(post)}
            onToggleLike={onToggleLike}
            onToggleSave={onToggleSave}
          />
        ))}
      </section>
    </div>
  );
}
