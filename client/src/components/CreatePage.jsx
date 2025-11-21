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
    <div className="flex min-h-[100vh] flex-col gap-4 bg-black px-6 pt-16 text-white">
      <div className="flex items-center justify-between">
        <button onClick={onClose} className="text-sm font-semibold text-sky-400">
          취소
        </button>
        <p className="text-lg font-semibold">새 게시물</p>
        <button className="rounded-full bg-sky-500 px-4 py-1 text-sm font-semibold text-white">
          다음
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/70">디바이스에서 사진이나 영상을 선택하세요</p>
          <input ref={inputRef} type="file" accept="image/*,video/*" className="hidden" onChange={handleFileSelect} />
          <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black" onClick={() => inputRef.current?.click()}>
            파일 선택
          </button>
          {fileName && <p className="mt-3 text-xs text-white/60">선택됨: {fileName}</p>}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <textarea
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="문구 입력..."
            className="h-32 w-full resize-none bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <div className="mt-3 flex justify-end text-xs text-white/50">{caption.length}/2,200</div>
        </div>
      </div>
    </div>
  );
}
