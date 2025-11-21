import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../src/app.js';

const agent = request(app);

test('GET /api/overview exposes workspace summary', async () => {
  const response = await agent.get('/api/overview');
  assert.equal(response.status, 200);
  assert.ok(response.body.generatedAt);
  assert.ok(Array.isArray(response.body.stats));
});

test('GET /api/tasks can filter by status', async () => {
  const response = await agent.get('/api/tasks').query({ status: '진행중' });
  assert.equal(response.status, 200);
  assert.ok(response.body.every((task) => task.status === '진행중'));
});

test('GET /api/approvals returns approval queue', async () => {
  const response = await agent.get('/api/approvals');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.equal(response.body.length > 0, true);
});

test('GET /api/messages returns channel snapshots', async () => {
  const response = await agent.get('/api/messages');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body[0].title);
});

test('GET /api/members returns presence list', async () => {
  const response = await agent.get('/api/members');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body[0].status);
});

test('Unknown API route responds with 404 JSON', async () => {
  const response = await agent.get('/api/unknown-route');
  assert.equal(response.status, 404);
  assert.equal(response.body.message, 'API route not found');
});
