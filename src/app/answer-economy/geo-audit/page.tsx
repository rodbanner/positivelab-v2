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

        {/* Embedded tool */}
        <div style={{ width: "100%", background: "var(--bg-secondary)" }}>
          <iframe
            src="https://geo-audit.replit.app"
            style={{ width: "100%", height: "calc(100vh - 200px)", minHeight: 600, border: "none", display: "block" }}
            title="GEO Site Audit Tool"
            allow="clipboard-write"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
