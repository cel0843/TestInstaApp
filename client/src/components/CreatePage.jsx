import { useRef, useState } from 'react';

export function CreatePage({ onClose, onUpload }) {
  const [caption, setCaption] = useState('');
  const [fileName, setFileName] = useState('');
  const inputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    onUpload?.(file);
  };

  return (
    <div className="flex min-h-[100vh] flex-col gap-4 bg-white px-4 pt-4 text-[#262626]">
      <div className="flex items-center justify-between border-b border-[#DBDBDB] pb-3">
        <button onClick={onClose} className="text-base text-[#262626]">
          <svg aria-label="Close" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="3" y2="21"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="21" y2="3"></line>
          </svg>
        </button>
        <p className="text-base font-semibold">새 게시물</p>
        <button className="text-base font-semibold text-[#0095F6]">
          공유
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="flex aspect-square flex-col items-center justify-center bg-[#FAFAFA] border border-[#DBDBDB] text-center">
          {fileName ? (
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold text-[#262626]">{fileName}</p>
              <button className="mt-2 text-xs text-[#0095F6]" onClick={() => inputRef.current?.click()}>변경</button>
            </div>
          ) : (
            <>
              <svg aria-label="Media" color="#262626" fill="#262626" height="70" role="img" viewBox="0 0 97.6 77.3" width="96">
                <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                <path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.9.3L7 45.5c-1.7-3.5-2.5-7.4-2.2-11.4.1-4.6 3.2-8.5 7.2-9.8-1.3-1.5-3.2-2.3-5.3-2.3-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6c1.1 0 2.1-.2 3.1-.7l-1.6-1.4c-1.8-1.7-4.6-1.6-6.3.2l-5.6 5.9c-1.2-2.9-1.8-6-1.8-9.2 0-8.8 7.1-16 16-16zm23.3 47.9l-21.7 1.2c-2.5 0-4.6-1.8-5-4.3l4.4-4.9c.4-.4.9-.5 1.4-.3.4.1.8.5.8 1l.2 2.8c.1 1.2 1.1 2.1 2.3 2.1h.2c1.2 0 2.1-1.1 2.1-2.3l-.2-2.8c-.3-4.6 3.3-8.6 7.9-8.9l5.3.3c.6 0 1.2.5 1.3 1.1l.6 9.5c.3 5.6-3.9 10.5-9.6 10.8zM82 59.9c-.2 3.8-3.2 6.8-6.9 7l-34 2c-3.8.2-7-2.8-7.2-6.6l-2-34c-.2-3.8 2.8-7 6.6-7.2l34-2c3.8-.2 7 2.8 7.2 6.6l2 34z" fill="currentColor"></path>
              </svg>
              <p className="mt-4 text-xl text-[#262626]">사진과 동영상을 여기에 끌어다 놓으세요</p>
              <input ref={inputRef} type="file" accept="image/*,video/*" className="hidden" onChange={handleFileSelect} />
              <button className="mt-4 rounded bg-[#0095F6] px-3 py-1.5 text-sm font-semibold text-white" onClick={() => inputRef.current?.click()}>
                컴퓨터에서 선택
              </button>
            </>
          )}
        </div>

        <div className="border-t border-[#DBDBDB] pt-4">
          <textarea
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="문구 입력..."
            className="h-32 w-full resize-none bg-transparent text-sm text-[#262626] placeholder:text-[#8E8E8E] focus:outline-none"
          />
          <div className="mt-2 flex justify-end text-xs text-[#8E8E8E]">{caption.length}/2,200</div>
        </div>
      </div>
    </div>
  );
}
