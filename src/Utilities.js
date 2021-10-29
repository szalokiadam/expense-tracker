export function uniqueNumber() {
  const date = new Date();
  const str = `${date.getFullYear()}${toTwoDigit(
    date.getMonth() + 1
  )}${toTwoDigit(date.getDate())}_${toTwoDigit(date.getHours())}${toTwoDigit(
    date.getMinutes()
  )}${toTwoDigit(date.getSeconds())}`;
  return str;
}
function toTwoDigit(digit) {
  if (digit < 10) return `0${digit}`;
  return `${digit}`;
}
