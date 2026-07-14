"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the homepage has a full-bleed dark hero behind the nav.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero || open;
  const textLight = overHero && !solid;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-taupe/15 py-4"
          : "bg-transparent py-6",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <nav className="mx-auto flex max-w-[80rem] items-center justify-between px-6 lg:px-10">
        {/* Left links (desktop) */}
        <ul
          className={`hidden flex-1 items-center gap-8 text-[0.72rem] uppercase tracking-[0.2em] lg:flex ${
            textLight ? "text-cream/90" : "text-espresso"
          }`}
        >
          {site.nav.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Wordmark */}
        <Link
          href="/"
          className={`font-display text-2xl tracking-[0.14em] lg:text-[1.7rem] ${
            textLight ? "text-cream" : "text-espresso"
          }`}
          aria-label={`${site.name} home`}
        >
          {site.wordmark}
        </Link>

        {/* Right links + CTA (desktop) */}
        <div
          className={`hidden flex-1 items-center justify-end gap-8 text-[0.72rem] uppercase tracking-[0.2em] lg:flex ${
            textLight ? "text-cream/90" : "text-espresso"
          }`}
        >
          {site.nav.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className={textLight ? "btn btn-light !px-6 !py-3" : "btn btn-solid !px-6 !py-3"}
          >
            Drop In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden ${textLight ? "text-cream" : "text-espresso"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="flex flex-col gap-[6px]">
            <span
              className={`block h-px w-7 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-7 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-7 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        <ul className="mx-auto flex max-w-[80rem] flex-col gap-1 px-6 pb-8 pt-6">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block border-b border-taupe/15 py-4 font-display text-3xl text-espresso"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link href="/membership" className="btn btn-solid w-full">
              Drop In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
