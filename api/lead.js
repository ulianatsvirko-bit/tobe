const TELEGRAM_API = 'https://api.telegram.org';
const ALLOWED_FORMATS = new Set(['Групповой формат', 'Гибридный формат', 'Индивидуальный формат', 'Пока не знаю']);
const ALLOWED_AGES = new Set(['13–15 лет', '16–17 лет', '18+ лет']);

function clean(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength + 1);
}

export function validateLead(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const name = clean(body.name, 80);
  const contact = clean(body.contact, 200);
  const format = clean(body.format, 40);
  const age = clean(body.age, 30);
  const goal = clean(body.goal, 500);
  const website = clean(body.website, 200);
  const submissionId = clean(body.submissionId, 100);

  if (website) return { spam: true };
  if (!name || name.length > 80 || !contact || contact.length > 200) return null;
  if (!ALLOWED_FORMATS.has(format) || !ALLOWED_AGES.has(age)) return null;
  if (goal.length > 500 || !/^[a-zA-Z0-9_-]{8,100}$/.test(submissionId)) return null;
  return { name, contact, format, age, goal, submissionId };
}

export function formatMessage(lead) {
  return [
    'Новая заявка с сайта ToBe. CLIL Academy',
    '',
    `Имя: ${lead.name}`,
    `Контакт: ${lead.contact}`,
    `Возраст: ${lead.age}`,
    `Формат: ${lead.format}`,
    `Цель: ${lead.goal || 'Не указана'}`,
    `ID: ${lead.submissionId}`,
  ].join('\n');
}

export function createLeadHandler({
  botToken = process.env.TELEGRAM_BOT_TOKEN,
  chatId = process.env.TELEGRAM_CHAT_ID,
  fetchImpl = globalThis.fetch,
} = {}) {
  return async function leadHandler(request, response) {
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (request.method !== 'POST') {
      response.setHeader('Allow', 'POST');
      return response.status(405).json({ ok: false, error: 'method_not_allowed' });
    }
    if (!botToken || !chatId || typeof fetchImpl !== 'function') {
      return response.status(503).json({ ok: false, error: 'service_unavailable' });
    }
    const lead = validateLead(request.body);
    if (!lead) return response.status(400).json({ ok: false, error: 'invalid_input' });
    if (lead.spam) return response.status(201).json({ ok: true });

    try {
      const telegramResponse = await fetchImpl(`${TELEGRAM_API}/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: String(chatId), text: formatMessage(lead), disable_web_page_preview: true }),
        signal: AbortSignal.timeout(8000),
      });
      const result = await telegramResponse.json().catch(() => ({}));
      if (!telegramResponse.ok || result.ok !== true) return response.status(502).json({ ok: false, error: 'delivery_failed' });
      return response.status(201).json({ ok: true });
    } catch {
      return response.status(502).json({ ok: false, error: 'delivery_failed' });
    }
  };
}

export default createLeadHandler();
