import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Link from "next/link";

interface SectionItem {
  href: string;
  tag: string;
  title: string;
  desc: string;
}

interface SectionLayoutProps {
  title: string;
  subtitle: string;
  color: string;
  items: SectionItem[];
}

export function SectionLayout({ title, subtitle, color, items }: SectionLayoutProps) {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Section header */}
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-2.5 py-1" style={{ border: `1px solid ${color}`, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color }}>
              {title}
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 700 }}>
              {subtitle}
            </h1>
          </div>
        </div>

        {/* Items list */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="no-underline group block border-b py-8 transition-all duration-200 hover:pl-3" style={{ borderColor: "var(--border)" }}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color, minWidth: 90 }}>
                  {item.tag}
                </span>
                <div className="flex-1">
                  <h2 className="transition-colors" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--text-primary)" }}>
                    {item.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
                <span className="hidden md:block transition-all duration-200 opacity-0 group-hover:opacity-50" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
