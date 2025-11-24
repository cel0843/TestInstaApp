# Instagram Clone

A full-stack Instagram clone built with Express API and React + Tailwind SPA (Vite).

## Features

- **Express API**: Serves the SPA and provides health check endpoints.
- **React SPA**: Located in `client/` folder, featuring:
    - Home Feed with Stories and Posts
    - Search/Explore Page
    - Reels Interface
    - Profile Page
    - Notifications & Messenger UI
- **Modern UI**: Built with Tailwind CSS, featuring dark mode aesthetics and smooth interactions.

## Installation & Run

```powershell
# 1) Install root dependencies
npm install

# 2) Install frontend dependencies
cd client
npm install
cd ..

# 3) Run development server
npm run dev
```

- Express API: http://localhost:3000
- React SPA: http://localhost:5173 (proxies /api to 3000)

### Production Build

```powershell
npm run build      # Generates client/dist
npm start          # Express serves the build
```

## Project Structure

```
├─ client/          # React SPA
│  ├─ src/
│  │  ├─ components/  # UI Components (Feed, Profile, etc.)
│  │  ├─ data/        # Mock Data
│  │  └─ App.jsx      # Main Application Component
├─ src/             # Express Backend
│  ├─ app.js        # App setup & Static serving
│  └─ server.js     # Server entry point
└─ package.json
```

## License

MIT
