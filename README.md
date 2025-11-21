# TeamFlow Express + React

Full-stack starter pairing an Express API with a React + Tailwind SPA (Vite) to prototype 그룹웨어 UX.

## 주요 특징

- **Express API**: `/api/overview`, `/api/tasks`, `/api/approvals` 등 협업 데이터 샘플 제공
- **React SPA**: `client/` 폴더에서 Tailwind UI로 대시보드/전자결재/알림·메시징 구성
- **그룹웨어 모듈**: 빠른 업무 바로가기, 메시지 허브, 출근 현황, 자원 예약, 최신 문서 등을 한 화면에 배치
- **단일 Dev 명령**: `npm run dev`로 서버(3000)와 Vite(5173)를 동시에 실행
- **자동 테스트**: `node:test` + SuperTest로 API 회귀 테스트 유지
- **프록시 & 정적 서빙**: 개발 중엔 Vite 프록시, 빌드 후엔 Express가 `client/dist`를 서빙

## 설치 & 실행

```powershell
# 1) 루트 의존성 설치
npm install

# 2) 프론트엔드 의존성 설치
cd client
npm install
cd ..

# 3) 동시 개발 서버 실행
npm run dev
```

- Express API: http://localhost:3000
- React SPA: http://localhost:5173 (자동 `/api` 프록시)

### 프로덕션 빌드 & 실행

```powershell
npm run build      # client/dist 생성
npm start          # Express가 빌드 결과물을 서빙
```

### 테스트

```powershell
npm test
```

## 스크립트 요약

| Script               | 설명                                         |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | 서버 + 프론트엔드 동시 실행 (`concurrently`) |
| `npm run dev:server` | Nodemon 기반 Express 개발 서버               |
| `npm run dev:client` | Vite 개발 서버 (Tailwind HMR)                |
| `npm run build`      | React SPA 번들 생성 (`client/dist`)          |
| `npm run start`      | 프로덕션 Express 서버                        |
| `npm run test`       | Node 테스트 러너 (SuperTest)                 |

## 프로젝트 구조

```
├─ client/
│  ├─ src/
│  │  ├─ components/{Sidebar,TopBar}.jsx
│  │  ├─ data/sampleData.js
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ tailwind.config.js
│  ├─ postcss.config.js
│  ├─ vite.config.js
│  └─ package.json
├─ src/
│  ├─ app.js        # Express API + SPA 서빙
│  └─ server.js     # HTTP 서버 부트스트랩
├─ tests/app.test.js
├─ package.json     # 서버 스크립트/디펜던시
└─ .github/
```

## API 개요

- `GET /api/overview` – KPI·바로가기·공지 요약
- `GET /api/tasks?status=진행중` – 상태별 업무 목록 필터링
- `GET /api/approvals` – 결재 대기열
- `GET /api/messages` – 주요 채널 메시지 스냅샷
- `GET /api/members` – 팀 출근/상태 정보
- `GET /api/reservations` – 회의실/화상 회의 예약 현황
- `GET /api/documents` – 최근 문서 변경 이력
- `GET /api/health` – 단순 헬스체크

React 개발 서버(`client/vite.config.js`)는 `/api` 호출을 Express(3000)으로 프록시합니다. 프로덕션에서는 `client/dist`가 자동으로 서빙되며, 빌드가 없으면 서버가 안내 페이지를 반환합니다.

## 커스터마이징

- 새로운 API는 `src/app.js`에 추가하고 관련 테스트를 `tests/app.test.js`에 작성하세요.
- SPA UI는 `client/src/components` 및 `client/src/data`에서 확장할 수 있습니다.
- Tailwind 색상/타이포그래피는 `client/tailwind.config.js`에서 조정합니다.

## License

MIT
