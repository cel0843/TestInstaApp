export function InstagramHeader({ onLikesClick, onMessengerClick }) {
  return (
    <header className="fixed left-1/2 top-0 z-30 w-full max-w-md -translate-x-1/2 bg-white px-4 py-1 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-['Billabong'] text-2xl text-[#262626] select-none" style={{ fontFamily: 'cursive' }}>
            Instagram
          </h1>
          <button className="ml-2 text-[#262626]">
            <svg aria-label="Down Chevron Icon" className="_8-yf5 " color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
              <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9a1 1 0 011.414 0l9 9a.999.999 0 01-.707 1.707z"></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button aria-label="알림" onClick={onLikesClick} className="text-[#262626] transition-opacity hover:opacity-70">
            <svg aria-label="Activity Feed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </button>
          <button aria-label="메신저" onClick={onMessengerClick} className="text-[#262626] transition-opacity hover:opacity-70">
            <svg aria-label="Messenger" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M12.003 2.001a9.705 9.705 0 11-9.705 9.705 9.696 9.696 0 019.705-9.705zm0 17.348c5.862 0 9.705-4.156 9.705-7.643 0-1.787-1.03-3.463-2.822-4.609-1.792-1.146-4.175-1.787-6.883-1.787-5.38 0-9.705 3.429-9.705 7.643 0 2.373 1.34 4.502 3.585 5.867v2.894l2.73-1.503a10.087 10.087 0 003.39.239z"></path>
              <path d="M13.447 12.388l-1.928-2.053-3.76 2.053 4.14-4.405 1.93 2.053 3.758-2.053-4.14 4.405z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
