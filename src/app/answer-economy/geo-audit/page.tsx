import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "GEO Site Audit | Positive Lab" };

export default function GeoAudit() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-answer)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
              INTERACTIVE TOOL
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600, marginBottom: 16 }}>
              GEO Site Audit
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
              How visible is your website to AI search engines? Enter a URL and find out.
            </p>
          </div>
        </div>

        {/* Tool placeholder */}
        <div className="max-w-[720px] mx-auto px-6 md:px-10 py-20">
          <div className="border rounded p-12 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>
              INTERACTIVE AUDIT TOOL
            </p>
            <p className="mt-4" style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              The GEO Site Audit tool will be embedded here. It analyses content quality, structured data, heading hierarchies, reading grade level, and crawlability to produce an AI-readiness score.
            </p>
            <p className="mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-answer)" }}>
              COMING SOON
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
