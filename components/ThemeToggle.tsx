"use client";

import { useEffect, useState } from "react";

type ThemeId = "sand" | "wine";

const THEMES: { id: ThemeId; label: string; swatch: string }[] = [
  { id: "sand", label: "Sand", swatch: "#7a6e5a" },
  { id: "wine", label: "Wine", swatch: "#571d2c" },
];

const STORAGE_KEY = "forme-theme";

/**
 * Floating preview control to A/B the two palettes. Persists the choice and
 * applies it via the `data-theme` attribute on <html>, which re-maps every
 * design token. (An inline script in the layout applies the saved theme
 * before paint to avoid a flash.)
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>("sand");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeId) || "sand";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
    setMounted(true);
  }, []);

  const apply = (id: ThemeId) => {
    setTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed left-1/2 top-[4.75rem] z-[70] -translate-x-1/2 lg:top-[5.25rem]"
      role="group"
      aria-label="Preview palette"
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s ease" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-espresso/15 bg-cream/85 p-1 shadow-[0_6px_24px_rgba(0,0,0,0.12)] backdrop-blur-md">
        {THEMES.map((t) => {
          const active = theme === t.id;
          return (
            <button
              key={t.id}
              onClick={() => apply(t.id)}
              aria-pressed={active}
              className={[
                "flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] transition-all duration-400",
                active
                  ? "bg-espresso text-cream"
                  : "text-espresso/70 hover:text-espresso",
              ].join(" ")}
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full ring-1 ring-black/10"
                style={{ background: t.swatch }}
                aria-hidden
              />
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
