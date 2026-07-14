import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-3 text-taupe">
      <span className="h-px w-6 bg-taupe/50" />
      {children}
    </span>
  );
}

/** Standard section heading: eyebrow + large display line(s). */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = tone === "light" ? "text-cream" : "text-espresso";
  const introColor = tone === "light" ? "text-cream/75" : "text-espresso/70";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-6 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={`font-display text-4xl leading-[1.04] sm:text-5xl lg:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`max-w-xl text-base leading-relaxed lg:text-lg ${introColor}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
