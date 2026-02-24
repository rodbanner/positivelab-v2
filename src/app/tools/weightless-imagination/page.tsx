import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = { title: "Weightless Imagination | Positive Lab" };

const pieces = [
  {
    tag: "BOOK",
    title: "Escape Velocity",
    subtitle: "A System for Liberating Enterprise Imagination",
    desc: "The complete methodology. Ten chapters covering the six anchors of conventional thinking, the mechanics of liberation, structured imagination protocols, environment design, and how to build a lasting practice.",
    href: "/tools/weightless-imagination/book",
    readTime: "45 min read",
  },
  {
    tag: "GAME SYSTEM",
    title: "The Complete Game System",
    subtitle: "Board Game, Card Compendium, Gravity Audit, Facilitation Guide & Digital Platform",
    desc: "Everything needed to run Escape Velocity sessions. The board game rules, all 240 cards across five decks, the 48-question Gravity Audit, a detailed facilitation guide, and the digital platform specification.",
    href: "/tools/weightless-imagination/game-system",
    readTime: "60 min read",
  },
];

export default function WeightlessImagination() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <div className="border-b" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
          <div style={{ height: 4, background: "var(--color-lab)" }} />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
            <Link href="/lab" className="no-underline inline-flex items-center gap-2 mb-4 transition-opacity hover:opacity-80" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-lab)", fontWeight: 600 }}>
              <ArrowLeft size={14} />
              The Lab
            </Link>

            <div className="block mb-6">
              <span className="inline-block px-3 py-1.5" style={{ background: "var(--color-lab)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", fontWeight: 600 }}>
                Methodology
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 720, marginBottom: 16 }}>
              Weightless Imagination
            </h1>

            <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
              A systematic approach to unconstrained thinking for enterprise leadership teams. Temporarily suspend the forces that keep your organisation&apos;s imagination in predictable orbits.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div style={{ background: "var(--bg-reading)" }}>
          <div className="max-w-[720px] mx-auto px-6 md:px-10 py-12 md:py-16">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", fontWeight: 300 }}>
              Every large organisation employs intelligent people who are capable of having interesting ideas. Most of those people rarely have interesting ideas at work. This is not a failure of talent. It is a failure of environment.
            </p>
            <p className="mt-4" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", fontWeight: 300 }}>
              Escape Velocity is a methodology for creating different environments &ndash; temporary spaces where imagination operates under different rules. The system comprises a book describing the philosophy and practice, and a complete game system for running sessions with leadership teams.
            </p>
          </div>
        </div>

        {/* Content cards */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {pieces.map((piece, i) => (
              <Link key={i} href={piece.href} className="no-underline group block p-8 md:p-10 transition-colors duration-200" style={{ background: "var(--bg-primary)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", padding: "5px 14px", fontWeight: 600, background: "var(--color-lab)", display: "inline-block", marginBottom: 16 }}>
                  {piece.tag}
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 4, color: "var(--text-primary)" }}>
                  {piece.title}
                </h2>
                <p style={{ fontSize: 14, color: "var(--text-tertiary)", fontWeight: 400, fontStyle: "italic", marginBottom: 12 }}>
                  {piece.subtitle}
                </p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.7, marginBottom: 16 }}>
                  {piece.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text-tertiary)" }}>
                    {piece.readTime}
                  </span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: "var(--text-primary)" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PDF download + status */}
        <div className="border-t" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-lab)", fontWeight: 600, marginBottom: 8 }}>In development</p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.7, maxWidth: 520 }}>
                The Weightless Imagination <strong>App</strong> and <strong>Executive Board Game</strong> are both in development. These will bring the methodology to life as interactive tools &ndash; one digital, one physical &ndash; designed for leadership offsites, strategy days, and innovation workshops.
              </p>
            </div>
            <a
              href="/escape-velocity.pdf"
              download="Escape-Velocity-Positive-Lab.pdf"
              className="flex-shrink-0"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--color-lab)",
                color: "#1a1a1a",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Download the book (PDF) →
            </a>
          </div>
        </div>

        {/* Closing quote */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[720px] mx-auto px-6 md:px-10 py-16 text-center">
            <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>
              &ldquo;The difficulty lies not so much in developing new ideas as in escaping from old ones.&rdquo;
            </p>
            <p className="mt-3" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "0.08em" }}>
              John Maynard Keynes
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
