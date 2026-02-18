import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "AI Readiness Assessment | Positive Lab" };

export default function Assessment() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div style={{ height: 4, background: "var(--color-lab)" }} />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-lab)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", fontWeight: 600 }}>
              INTERACTIVE TOOL
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600 }}>
              AI Readiness Assessment
            </h1>
            <p className="mt-4" style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
              Eight questions. Instant results. Find out where your organisation sits on the AI adoption maturity curve.
            </p>
          </div>
        </div>
        <div className="max-w-[720px] mx-auto px-6 md:px-10 py-20">
          <div className="border rounded p-12 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>INTERACTIVE ASSESSMENT</p>
            <p className="mt-4" style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              A rapid self-assessment for organisations in the throes of adopting generative AI. Combines maturity frameworks from our work across 150+ enterprise clients with practical benchmarks for leadership, infrastructure, culture, and execution readiness.
            </p>
            <p className="mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-lab)" }}>COMING SOON</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
