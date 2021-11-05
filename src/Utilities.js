export function uniqueNumber() {
  const date = new Date();
  const str = `${date.getFullYear()}${toTwoDigit(
    date.getMonth() + 1
  )}${toTwoDigit(date.getDate())}_${toTwoDigit(date.getHours())}${toTwoDigit(
    date.getMinutes()
  )}${toTwoDigit(date.getSeconds())}`;
  return str;
}
export function toTwoDigit(digit) {
  if (digit < 10) return `0${digit}`;
  return `${digit}`;
}
export function dateString(_date, format) {
  const date = new Date(_date);
  const [year, month, day] = [
    toTwoDigit(date.getFullYear()),
    toTwoDigit(date.getMonth() + 1),
    toTwoDigit(date.getDate()),
  ];
  if (format)
    return format
      .replace(/y/i, `${year}`)
      .replace(/m/i, `${month}`)
      .replace(/d/i, `${day}`);
  return `${year}-${month}-${day}`;
}
