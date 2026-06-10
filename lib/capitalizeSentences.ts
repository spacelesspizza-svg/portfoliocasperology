/** Заглавная буква в начале предложения и после переноса строки. */
export function capitalizeSentences(text: string): string {
  return text.replace(
    /(^|[.!?][\s\n]*|\n\s*)([а-яёa-z])/gi,
    (_, prefix, letter) => prefix + letter.toLocaleUpperCase("ru-RU"),
  );
}
