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

  res.type('html').send(`<!doctype html><html><head><meta charset="utf-8" /><title>Instagram Clone</title></head><body><main style="font-family:system-ui;padding:2rem;max-width:720px;margin:0 auto;text-align:center"><h1>React SPA 빌드가 필요합니다</h1><p>프론트엔드 번들을 생성하려면 <code>npm run build:client</code> 명령을 실행하세요.</p></main></body></html>`);
});

export default app;
