export function cut(value: string = "", length: number = 30, end: string = "") {
  return value.length > length
    ? value.slice(0, length) + end
    : value.slice(0, length);
}
