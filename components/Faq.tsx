"use client";

import { useState } from "react";

export interface QA {
  q: string;
  a: string;
}

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-taupe/15 last:border-b">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl text-espresso lg:text-2xl">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-2xl text-taupe transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-500 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <div className="min-h-0">
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-espresso/70">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
