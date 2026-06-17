import { capitalizeSentences } from "../lib/capitalizeSentences";
import { fixHangingPrepositions } from "../lib/fixHangingPrepositions";
import { normalizeRwb } from "../lib/normalizeRwb";
import { replaceHyphensWithEmDash } from "../lib/replaceHyphensWithEmDash";
import { replaceStraightQuotesWithGuillemets } from "../lib/replaceStraightQuotesWithGuillemets";

type TypographyProps = {
  children: string;
  as?: "p" | "span" | "a" | "div";
  className?: string;
  href?: string;
};

export function Typography({ children, as: Tag = "p", className, href }: TypographyProps) {
  const text = normalizeRwb(
    replaceStraightQuotesWithGuillemets(
      replaceHyphensWithEmDash(fixHangingPrepositions(capitalizeSentences(children))),
    ),
  );

  if (Tag === "a") {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return <Tag className={className}>{text}</Tag>;
}
