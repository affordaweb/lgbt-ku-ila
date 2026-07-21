export function highlightLast(text: string) {
  const parts = text.split(' ');
  if (parts.length <= 1) return <em>{text}</em>;
  const last = parts.pop()!;
  return <>{parts.join(' ')} <em>{last}</em></>;
}
