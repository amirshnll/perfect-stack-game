import { ext } from './browser-api.js';
let messages = {};
export const rtl = new Set(['fa', 'ar']);
export async function setLocale(locale) {
  messages = await fetch(ext.runtime.getURL(`_locales/${locale}/messages.json`)).then(r => r.json());
  document.documentElement.lang = locale;
  document.documentElement.dir = rtl.has(locale) ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.getElementById('game').setAttribute('aria-label', t('gameAria'));
}
export function t(key) { return messages[key]?.message ?? key; }
export const languages = { en: 'English', fa: 'فارسی', ar: 'العربية', es: 'Español', fr: 'Français', de: 'Deutsch', tr: 'Türkçe', sv: 'Svenska', et: 'Eesti', ja: '日本語', ko: '한국어', zh: '中文', it: 'Italiano' };
