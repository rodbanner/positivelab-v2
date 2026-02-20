import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PveMan } from "@/components/PveMan";

const ACCENT = "var(--color-answer)";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-14 grid-bg" style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="flex-1">
              <div className="inline-block mb-6 px-3 py-1.5" style={{ background: ACCENT, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
                INTELLIGENCE · TOOLS · STRATEGY
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Building the{" "}
                <span style={{ fontWeight: 500, color: ACCENT }}>
                  intelligence layer
                </span>
                <br />
                for stakeholder engagement
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 460, fontWeight: 300 }}>
                Original research, working tools, and provocative thinking from the frontline of AI transformation at the Positive Change Group.
              </p>
            </div>

            {/* Stats */}
            <div className="hidden lg:flex flex-col border-l pl-10" style={{ borderColor: "var(--border)", minWidth: 180 }}>
              {[
                { num: "12", label: "Destination pieces" },
                { num: "6", label: "Working tools" },
                { num: "4", label: "Research papers" },
                { num: "43", label: "Citations" },
              ].map((s, i) => (
                <div key={i} className="py-4 border-b" style={{ borderColor: "var(--border)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300, letterSpacing: "-0.02em", color: i === 0 ? ACCENT : "var(--text-primary)" }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)", marginTop: 4, letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured strip */}
        <div className="border-t" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start md:items-center gap-8">
            <PveMan size={48} className="hidden md:block flex-shrink-0" />
            <div className="flex-1">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8 }}>
                Featured
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                Your customers aren&apos;t searching anymore. They&apos;re getting answers.
              </h2>
            </div>
            <Link href="/answer-economy/white-paper" className="no-underline flex-shrink-0 px-4 py-2" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", background: "var(--color-answer)", fontWeight: 600 }}>
              Read →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
