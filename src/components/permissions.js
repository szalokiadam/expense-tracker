export function checkPermission({ username, password }) {
  return process.env.REACT_APP_LOGIN_ACCOUNT === username + password;
}
