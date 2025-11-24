import { useState } from 'react';

function StoryBubble({ story, onClick }) {
  return (
    <button className="flex flex-col items-center gap-1 min-w-[72px]" onClick={() => onClick(story)}>
      <div className={`h-[68px] w-[68px] rounded-full p-[3px] ${story.viewed ? 'bg-[#DBDBDB]' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600'}`}>
        <div className="h-full w-full rounded-full bg-white p-[2px]">
          <img src={story.avatar} alt={`${story.name} avatar`} className="h-full w-full rounded-full object-cover" loading="lazy" />
        </div>
      </div>
      <span className="text-[11px] text-[#262626] truncate w-16 text-center">{story.name}</span>
    </button>
  );
}

function PostActions({ liked, saved, onLike, onComment, onShare, onSave }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <button className="transition-transform active:scale-90" aria-label="좋아요" onClick={onLike}>
          <svg aria-label="Like" color={liked ? '#ed4956' : '#262626'} fill={liked ? '#ed4956' : '#262626'} height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d={liked ? "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" : "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"}></path>
          </svg>
        </button>
        <button className="transition-transform active:scale-90" aria-label="댓글" onClick={onComment}>
          <svg aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
        <button className="transition-transform active:scale-90" aria-label="공유" onClick={onShare}>
          <svg aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>
        </button>
      </div>
      <button className="transition-transform active:scale-90" aria-label="저장" onClick={onSave}>
        <svg aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
          {saved ? (
            <path d="M20 22a.999.999 0 01-.685-.273L12 14.815l-7.315 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
          ) : (
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
          )}
        </svg>
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
    <article className="border-b border-[#DBDBDB] pb-4">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={post.userImage} alt={post.name} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
          <div className="leading-tight text-[#262626]">
            <p className="text-sm font-semibold">{post.username}</p>
            {post.location && <p className="text-xs text-[#262626]">{post.location}</p>}
          </div>
        </div>
        <button className="text-[#262626]" aria-label="더보기">
          <svg aria-label="More options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </button>
      </header>
      <div className="w-full">
        <img src={post.media} alt={`${post.name} post`} className="w-full object-cover" loading="lazy" />
      </div>
      <div className="px-4 text-[#262626]">
        <PostActions
          liked={post.liked}
          saved={post.saved}
          onLike={() => onToggleLike(post.id)}
          onComment={() => onViewComments(post)}
          onShare={() => onShareClick(post)}
          onSave={() => onToggleSave(post.id)}
        />
        <p className="text-sm font-semibold mb-1">좋아요 {post.likesCount.toLocaleString('en-US')}개</p>
        <p className="text-sm text-[#262626]">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </p>
        <button className="mt-1 text-sm text-[#8E8E8E]" onClick={() => onViewComments(post)}>
          댓글 {post.comments.length}개 모두 보기
        </button>
        <p className="mt-1 text-[10px] uppercase text-[#8E8E8E]">{post.time}</p>
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
    <div className="space-y-2 text-[#262626] pb-16">
      <section className="flex gap-4 overflow-x-auto px-4 py-2 border-b border-[#DBDBDB] no-scrollbar">
        {stories.map((story) => (
          <StoryBubble key={story.id} story={story} onClick={onStoryClick} />
        ))}
      </section>

      <section className="flex flex-col">
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
