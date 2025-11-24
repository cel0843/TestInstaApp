import { useState, useEffect } from 'react';

export function StoryViewer({ stories, initialStoryId, onClose, onNextStory, onPrevStory }) {
    const [progress, setProgress] = useState(0);
    const storyIndex = stories.findIndex((s) => s.id === initialStoryId);
    const story = stories[storyIndex];

    useEffect(() => {
        setProgress(0);
        const duration = 5000; // 5 seconds per story
        const interval = 50; // Update every 50ms
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    if (storyIndex < stories.length - 1) {
                        onNextStory();
                    } else {
                        onClose();
                    }
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [storyIndex, stories.length, onNextStory, onClose]);

    if (!story) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Progress Bar */}
            <div className="absolute top-4 left-0 right-0 z-20 flex gap-1 px-2">
                {stories.map((s, i) => (
                    <div key={s.id} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30">
                        <div
                            className="h-full bg-white transition-all duration-100 ease-linear"
                            style={{
                                width: i < storyIndex ? '100%' : i === storyIndex ? `${progress}%` : '0%'
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Header */}
            <div className="absolute top-8 left-0 right-0 z-20 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <img src={story.avatar} alt={story.name} className="h-8 w-8 rounded-full border border-white/20" />
                    <span className="text-sm font-semibold text-white">{story.name}</span>
                    <span className="text-xs text-white/60">3시간</span>
                </div>
                <button onClick={onClose} className="text-white">
                    <svg aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="3" y2="21"></line>
                        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="21" y2="3"></line>
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="relative h-full w-full max-w-md bg-zinc-900">
                <img src={story.image || story.avatar} alt="Story content" className="h-full w-full object-cover" />

                {/* Navigation Overlays */}
                <div className="absolute inset-y-0 left-0 w-1/2 z-10" onClick={onPrevStory} />
                <div className="absolute inset-y-0 right-0 w-1/2 z-10" onClick={onNextStory} />
            </div>
        </div>
    );
}
