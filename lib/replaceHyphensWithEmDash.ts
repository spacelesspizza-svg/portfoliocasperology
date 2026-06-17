/** Дефис между словами → типографское тире. Сложные слова (дизайн-саппорт) не трогаем. */
export function replaceHyphensWithEmDash(text: string): string {
  return text.replace(/\s+-\s+/g, " — ");
}
