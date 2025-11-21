import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
const spaIndexPath = path.join(clientDistPath, 'index.html');

const app = express();

app.use(express.json());

const workspaceSnapshot = {
  stats: [
    { label: '진행 중 프로젝트', value: 12, delta: '+2 신규' },
    { label: '이번주 승인 요청', value: 8, delta: '3건 대기' },
    { label: '오늘 회의', value: 4, delta: '1건 변경' }
  ],
  shortcuts: [
    { id: 'shortcut-1', label: '전자결재 작성', helper: '임시저장 3건', icon: '🧾' },
    { id: 'shortcut-2', label: '휴가/근태 신청', helper: '연차 7일 남음', icon: '🌿' }
  ],
  announcements: [
    { id: 1, title: '5월 OKR 점검 회의록 공유', author: '전략기획팀', time: '오늘 오전 9:20' },
    { id: 2, title: '휴가/출장 승인 프로세스 변경 안내', author: '인사팀', time: '어제 오후 4:05' }
  ],
  messages: [
    { id: 'channel-ux', title: '#ux-lab', preview: '온보딩 화면 시안 공유.', unread: 4, timestamp: '10분 전' },
    { id: 'channel-ops', title: '#ops-alert', preview: 'SLA 리포트 초안.', unread: 1, timestamp: '23분 전' }
  ],
  members: [
    { id: 1, name: '이창은', role: 'PM', status: '회의 중' },
    { id: 2, name: '이서연', role: 'FE', status: '원격' }
  ],
  reservations: [
    { id: 'res-1', space: 'Studio B', type: '회의실', time: '15:00 - 16:00' }
  ],
  documents: [
    { id: 'doc-11', title: '근태 정책 v3.2', owner: 'HR' }
  ]
};

const taskBoard = [
  { id: 'GW-1324', title: '모바일 앱 QA 결과 반영', owner: '최유진', due: '오늘', status: '진행중' },
  { id: 'GW-1298', title: '그룹웨어 알림센터 UX 리뷰', owner: '박민수', due: '내일', status: '대기' },
  { id: 'GW-1282', title: '워크플로 자동화 스크립트', owner: '이서연', due: '5월 18일', status: '완료' }
];

const approvals = [
  { id: 'AP-482', requester: '장도윤', type: '품의서', amount: 1200000, status: '결재대기' },
  { id: 'AP-479', requester: '백승민', type: '지출결의', amount: 680000, status: '팀장 검토중' }
];

app.get('/api/overview', (req, res) => {
  res.json({ generatedAt: Date.now(), ...workspaceSnapshot });
});

app.get('/api/messages', (req, res) => {
  res.json(workspaceSnapshot.messages);
});

app.get('/api/members', (req, res) => {
  res.json(workspaceSnapshot.members);
});

app.get('/api/reservations', (req, res) => {
  res.json(workspaceSnapshot.reservations);
});

app.get('/api/documents', (req, res) => {
  res.json(workspaceSnapshot.documents);
});

app.get('/api/tasks', (req, res) => {
  const { status } = req.query;
  if (!status || status === '전체') {
    res.json(taskBoard);
    return;
  }
  res.json(taskBoard.filter((task) => task.status === status));
});

app.get('/api/approvals', (req, res) => {
  res.json(approvals);
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: Date.now() });
});

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }

  if (fs.existsSync(spaIndexPath)) {
    return res.sendFile(spaIndexPath);
  }

  res.type('html').send(`<!doctype html><html><head><meta charset="utf-8" /><title>TeamFlow</title></head><body><main style="font-family:system-ui;padding:2rem;max-width:720px;margin:0 auto;text-align:center"><h1>React SPA 빌드가 필요합니다</h1><p>프론트엔드 번들을 생성하려면 <code>npm run build:client</code> 명령을 실행하세요.</p></main></body></html>`);
});

export default app;
