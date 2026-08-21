export const LEAD_FORM_EVENT = 'tobe:open-lead-form';

export function openLeadForm(format = '') {
  window.dispatchEvent(new CustomEvent(LEAD_FORM_EVENT, { detail: { format } }));
}
