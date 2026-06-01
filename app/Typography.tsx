import { fixHangingPrepositions } from "../lib/fixHangingPrepositions";

type TypographyProps = {
  children: string;
  as?: "p" | "span" | "a" | "div";
  className?: string;
  href?: string;
};

export function Typography({ children, as: Tag = "p", className, href }: TypographyProps) {
  const text = fixHangingPrepositions(children);

  if (Tag === "a") {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return <Tag className={className}>{text}</Tag>;
}
