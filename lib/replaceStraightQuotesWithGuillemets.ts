/** Прямые кавычки " → типографские «». */
export function replaceStraightQuotesWithGuillemets(text: string): string {
  let open = true;
  return text.replace(/"/g, () => {
    const quote = open ? "«" : "»";
    open = !open;
    return quote;
  });
}
