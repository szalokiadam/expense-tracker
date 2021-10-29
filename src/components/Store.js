export const store = [
  {
    id: 0,
    title: "Nike shoes",
    amount: -15000,
    created: 1631138400000,
  },
  {
    id: 1,
    title: "Hamburger",
    amount: -2000,
    created: 1633039200000,
  },
  {
    id: 2,
    title: "Controller",
    amount: -25001,
    created: 1634853600000,
  },
];
export function loadStore() {
  const _store = localStorage.getItem("transactions");
  if (!_store) return [];
  return JSON.parse(_store);
}

export function saveStore(_store) {
  localStorage.setItem("transactions", JSON.stringify(_store));
}
