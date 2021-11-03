export function loadStore(storeName) {
  const _store = localStorage.getItem(storeName);
  if (!_store) return [];
  return JSON.parse(_store);
}

export function saveStore(storeName, _store) {
  localStorage.setItem(storeName, JSON.stringify(_store));
}
