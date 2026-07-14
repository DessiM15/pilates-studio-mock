import Link from "next/link";
import { site } from "@/lib/site";
import { locations } from "@/lib/data/locations";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-mushroom">The FORME Letter</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.05] text-cream lg:text-5xl">
              Movement notes, <span className="accent">rarely</span> — never noise.
            </h2>
          </div>
          <form
            className="flex flex-col justify-end gap-4"
            aria-label="Newsletter signup"
          >
            <div className="flex items-center gap-3 border-b border-cream/25 pb-3">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-60"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-cream/40">
              By subscribing you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-[80rem] gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-display text-3xl tracking-[0.14em] text-cream">
            {site.wordmark}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {site.description}
          </p>
        </div>

        <FooterCol title="Explore">
          {site.nav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Studios">
          {locations.map((l) => (
            <FooterLink key={l.id} href={`/studios/${l.id}`}>
              {l.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Connect">
          <FooterLink href={site.instagramUrl}>{site.instagram}</FooterLink>
          <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          <FooterLink href={`tel:${site.phone}`}>{site.phone}</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/40 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.name} Studio. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">Strength, refined.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow text-mushroom">{title}</p>
      <ul className="mt-5 flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-cream/70 transition-colors hover:text-cream"
      >
        {children}
      </Link>
    </li>
  );
}
