import { storage } from './browser-api.js';
const defaults = { bestScore: 0, bestHeight: 0, bestPerfect: 0, language: 'en', sound: true, reducedMotion: false };
export async function loadSettings() { return storage.get(defaults); }
export async function save(values) { return storage.set(values); }
