export function loadStore(userName) {
  const _store = localStorage.getItem(userName);
  if (!_store) return [];
  return JSON.parse(_store);
}

export function saveStore(userName, _store) {
  localStorage.setItem(userName, JSON.stringify(_store));
}
