import { useState } from 'react';
import { InstagramHeader } from './components/InstagramHeader.jsx';
import { BottomNav } from './components/BottomNav.jsx';
import { HomePage } from './components/HomePage.jsx';
import { SearchPage } from './components/SearchPage.jsx';
import { CreatePage } from './components/CreatePage.jsx';
import { ReelsPage } from './components/ReelsPage.jsx';
import { ProfilePage } from './components/ProfilePage.jsx';
import { NotificationsPage } from './components/NotificationsPage.jsx';
import { MessengerPage } from './components/MessengerPage.jsx';
import { CommentsModal } from './components/CommentsModal.jsx';
import { ShareModal } from './components/ShareModal.jsx';
import { StoryViewer } from './components/StoryViewer.jsx';
import { stories as storiesData, posts as postsData, exploreTopics, reels as reelsData, profile as profileData } from './data/sampleData.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessenger, setShowMessenger] = useState(false);
  const [commentModalData, setCommentModalData] = useState(null);
  const [stories, setStories] = useState(storiesData);
  const [viewingStory, setViewingStory] = useState(null);
  const [posts, setPosts] = useState(() =>
    postsData.map((post) => ({
      ...post,
      likesCount: Number(post.likes.replace(/,/g, '')),
      liked: false,
      saved: false
    }))
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [shareContext, setShareContext] = useState(null);
  const [likedReels, setLikedReels] = useState({});

  const handleStoryClick = (story) => {
    setStories((prev) => prev.map((item) => (item.id === story.id ? { ...item, viewed: true } : item)));
    setViewingStory(story.id);
  };

  const handleStoryClose = () => setViewingStory(null);

  const handleStoryNext = () => {
    const currentIndex = stories.findIndex((s) => s.id === viewingStory);
    if (currentIndex < stories.length - 1) {
      setViewingStory(stories[currentIndex + 1].id);
      setStories((prev) => prev.map((item, idx) => (idx === currentIndex + 1 ? { ...item, viewed: true } : item)));
    } else {
      setViewingStory(null);
    }
  };

  const handleStoryPrev = () => {
    const currentIndex = stories.findIndex((s) => s.id === viewingStory);
    if (currentIndex > 0) {
      setViewingStory(stories[currentIndex - 1].id);
    }
  };

  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const nextLiked = !post.liked;
        return {
          ...post,
          liked: nextLiked,
          likesCount: post.likesCount + (nextLiked ? 1 : -1)
        };
      })
    );
  };

  const handleToggleSave = (postId) => {
    setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, saved: !post.saved } : post)));
  };

  const handleAddComment = (postId, text) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: [...post.comments, { id: `new-${Date.now()}`, user: 'you', text }]
          }
          : post
      )
    );
    setCommentModalData((modal) =>
      modal && modal.id === postId
        ? { ...modal, comments: [...modal.comments, { id: `new-${Date.now()}`, user: 'you', text }] }
        : modal
    );
  };

  const handleShare = (payload) => setShareContext(payload);

  const handleReelLike = (reelId) => {
    setLikedReels((prev) => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            stories={stories}
            posts={posts}
            onStoryClick={handleStoryClick}
            onToggleLike={handleToggleLike}
            onToggleSave={handleToggleSave}
            onCommentClick={(data) => setCommentModalData({ ...data })}
            onShareClick={(post) => handleShare({ title: `${post.name}의 게시물`, subtitle: post.caption.slice(0, 40) })}
            onAddComment={handleAddComment}
          />
        );
      case 'search':
        return (
          <SearchPage
            query={searchQuery}
            onQueryChange={setSearchQuery}
            topics={exploreTopics}
            onSelectTopic={(topic) => handleShare({ title: topic.title, subtitle: topic.category })}
          />
        );
      case 'create':
        return <CreatePage onClose={() => setActiveTab('home')} onUpload={(file) => handleShare({ title: `${file.name}`, subtitle: '업로드 준비 완료' })} />;
      case 'reels':
        return <ReelsPage reels={reelsData} likedReels={likedReels} onLike={handleReelLike} onShare={(id) => handleShare({ title: '릴스 공유', subtitle: id })} />;
      case 'profile':
        return (
          <ProfilePage
            profile={profileData}
            onShareProfile={(post) =>
              handleShare(
                post
                  ? { title: '그리드 게시물 공유', subtitle: post.id }
                  : { title: '프로필 공유', subtitle: profileData.username }
              )
            }
          />
        );
      default:
        return (
          <HomePage
            stories={stories}
            posts={posts}
            onStoryClick={handleStoryClick}
            onToggleLike={handleToggleLike}
            onToggleSave={handleToggleSave}
            onCommentClick={(data) => setCommentModalData({ ...data })}
            onShareClick={(post) => handleShare({ title: `${post.name}의 게시물`, subtitle: post.caption.slice(0, 40) })}
            onAddComment={handleAddComment}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white px-0 pb-20 pt-0 text-[#262626]">
      {activeTab !== 'reels' && activeTab !== 'create' && (
        <InstagramHeader
          onLikesClick={() => setShowNotifications(true)}
          onMessengerClick={() => setShowMessenger(true)}
        />
      )}

      <div className={`mx-auto w-full max-w-md ${activeTab !== 'reels' && activeTab !== 'create' ? 'pt-16 pb-16' : ''}`}>
        {renderContent()}
      </div>

      {activeTab !== 'create' && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}

      {showNotifications && <NotificationsPage onClose={() => setShowNotifications(false)} />}
      {showMessenger && <MessengerPage onClose={() => setShowMessenger(false)} />}
      {viewingStory && (
        <StoryViewer
          stories={stories}
          initialStoryId={viewingStory}
          onClose={handleStoryClose}
          onNextStory={handleStoryNext}
          onPrevStory={handleStoryPrev}
        />
      )}
      {commentModalData && (
        <CommentsModal
          username={commentModalData.username}
          userImage={commentModalData.userImage}
          caption={commentModalData.caption}
          comments={commentModalData.comments}
          onClose={() => setCommentModalData(null)}
        />
      )}
      {shareContext && <ShareModal context={shareContext} onClose={() => setShareContext(null)} />}
    </div>
  );
}
