import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const app = read('src/App.tsx');
const hero = read('src/components/Hero.tsx');
const cta = read('src/components/CTA.tsx');
const footer = read('src/components/Footer.tsx');
const pricing = read('src/components/Pricing.tsx');
const html = read('index.html');


test('hero carries the agreed positioning', () => {
  assert.match(read('src/components/Intro.tsx'), /the main character/);
  assert.match(hero, /Онлайн-школа английского языка/);
  assert.match(hero, /Учи английский через то/);
  assert.doesNotMatch(hero, /gradient/);
  assert.doesNotMatch(html, /CLIL Academy/);
});

test('home page shows no unverifiable claims or certificates', () => {
  const home = read('src/pages/HomePage.tsx');
  assert.doesNotMatch(home, /Results/);
  assert.match(home, /Founder/);
  const founder = read('src/components/Founder.tsx');
  assert.doesNotMatch(founder, /TKT|TESOL|CAE Score/);
  assert.match(founder, /ЦТ по английскому/);
  assert.match(founder, /92 ?\/ ?100/);
});

test('lead capture is a real short form backed by the lead API', () => {
  assert.match(app, /LeadForm/);
  assert.match(cta, /openLeadForm/);
  assert.match(read('src/components/LeadForm.tsx'), /fetch\('\/api\/lead'/);
  assert.match(read('src/components/LeadForm.tsx'), /name="name"/);
  assert.match(read('src/components/LeadForm.tsx'), /name="contact"/);
  assert.match(read('src/components/LeadForm.tsx'), /name="format"/);
});

test('broken AI chatbot is removed and replaced with Telegram access', () => {
  assert.doesNotMatch(app, /ChatBot/);
  assert.match(app, /TelegramButton/);
  assert.doesNotMatch(read('package.json'), /@google\/genai/);
});

test('pricing shows BYN and RUB, no hybrid plan, guarantee, and opens the lead form', () => {
  assert.match(pricing, /250 BYN/);
  assert.match(pricing, /380 BYN/);
  assert.match(pricing, /₽/);
  assert.doesNotMatch(pricing, /450 BYN|Гибридный/);
  assert.match(pricing, /вернём деньги за оставшиеся занятия месяца/);
  assert.match(pricing, /openLeadForm\(plan.title\)/);
});

test('placeholder WhatsApp is not published', () => {
  assert.doesNotMatch(footer, /375291234567|wa\.me/);
});

test('sharing and canonical metadata exist', () => {
  assert.match(html, /rel="canonical"/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /property="og:image"/);
});

test('lead API accepts the school form contract and formats Telegram delivery', async () => {
  const { validateLead, formatMessage } = await import('../api/lead.js');
  const lead = validateLead({
    name: 'Анна',
    contact: '@anna',
    format: 'Клуб ToBe Talks',
    age: '18–20 лет',
    level: 'B1',
    goal: 'Свободнее говорить',
    website: '',
    submissionId: 'lead-contract-123',
  });
  assert.ok(lead);
  assert.match(formatMessage(lead), /ToBe · Анна/);
  assert.equal(validateLead({ ...lead, format: 'Неизвестный формат' }), null);
  assert.equal(validateLead({ ...lead, format: 'Гибридный формат' }), null);
  assert.equal(validateLead({ ...lead, level: '' }), null);
});
