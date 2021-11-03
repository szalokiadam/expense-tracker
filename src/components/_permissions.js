export const users = [
  {
    username: "adam",
    password: "1234",
  },
  {
    username: "vivi",
    password: "1234",
  },
];

export function checkPermission({ username, password }) {
  return users.filter(
    (user) => user.username === username && user.password === password
  )[0];
}
