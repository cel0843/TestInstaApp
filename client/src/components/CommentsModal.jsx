export function CommentsModal({ username, userImage, caption, comments = [], onClose }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/90">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="text-sm font-semibold">댓글</p>
          <button onClick={onClose} className="text-sm text-white/60">
            닫기
          </button>
        </div>
        <div className="flex flex-col gap-4 px-4 py-5">
          <div className="flex items-center gap-3">
            <img src={userImage} alt={username} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="text-sm font-semibold">@{username}</p>
              <p className="text-sm text-white/70">{caption}</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            {comments.map((comment) => (
              <div key={comment.id}>
                <span className="font-semibold">{comment.user}</span> {comment.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 pt-4">
            <input
              className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              placeholder="댓글 추가..."
            />
            <button className="text-sm font-semibold text-sky-400">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
}
