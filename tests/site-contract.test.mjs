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


test('site targets teenagers and adults', () => {
  assert.match(hero, /подростков и взрослых/i);
  assert.match(html, /подростков и взрослых/i);
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

test('teacher profile block is removed from the home page', () => {
  const home = read('src/pages/HomePage.tsx');
  assert.doesNotMatch(home, /Founder/);
  assert.doesNotMatch(home, /Кто вас обучает\?|Ульяна Цвирко|CAE Score A|TESOL|TKT CLIL Band 4/);
});

test('pricing remains in BYN and all format buttons open the lead form', () => {
  assert.match(pricing, /250 BYN/);
  assert.match(pricing, /450 BYN/);
  assert.match(pricing, /380 BYN/);
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
    format: 'Гибридный формат',
    age: '18+ лет',
    goal: 'Свободнее говорить',
    website: '',
    submissionId: 'lead-contract-123',
  });
  assert.ok(lead);
  assert.match(formatMessage(lead), /ToBe · Анна/);
  assert.equal(validateLead({ ...lead, format: 'Неизвестный формат' }), null);
});
