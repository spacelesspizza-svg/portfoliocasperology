/** RWB — всегда заглавными. */
export function normalizeRwb(text: string): string {
  return text.replace(/\brwb\b/gi, "RWB");
}
