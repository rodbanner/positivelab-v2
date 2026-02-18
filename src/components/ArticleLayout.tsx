import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  pillar: string;
  pillarColor: string;
  pillarHref: string;
  tag: string;
  title: string;
  subtitle?: string;
  readTime?: string;
  children: React.ReactNode;
}

export function ArticleLayout({ pillar, pillarColor, pillarHref, tag, title, subtitle, readTime, children }: ArticleLayoutProps) {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Article header */}
        <div className="border-b" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
          <div style={{ height: 4, background: pillarColor }} />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
            <Link href={pillarHref} className="no-underline inline-flex items-center gap-2 mb-8 transition-opacity hover:opacity-80" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: pillarColor, fontWeight: 600 }}>
              <ArrowLeft size={14} />
              {pillar}
            </Link>

            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: pillarColor, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
              {tag}
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 720, marginBottom: subtitle ? 16 : 0 }}>
              {title}
            </h1>

            {subtitle && (
              <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
                {subtitle}
              </p>
            )}

            {readTime && (
              <p className="mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "0.08em" }}>
                {readTime}
              </p>
            )}
          </div>
        </div>

        {/* Article body – slightly lighter background for readability */}
        <div style={{ background: "var(--bg-reading)" }}>
          <div className="max-w-[720px] mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="article-prose">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
