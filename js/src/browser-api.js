export const ext = globalThis.browser ?? globalThis.chrome;
export const storage = {
  async get(defaults) { return ext.storage.local.get(defaults); },
  async set(values) { return ext.storage.local.set(values); }
};
