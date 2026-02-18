import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "AI Readiness Assessment | Positive Lab" };

export default function Assessment() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-2.5 py-1" style={{ border: "1px solid var(--color-stakeholder)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-stakeholder)" }}>
              INTERACTIVE TOOL
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600 }}>
              AI Readiness Assessment
            </h1>
            <p className="mt-4" style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
              Where does your organisation sit on the stakeholder science maturity curve?
            </p>
          </div>
        </div>
        <div className="max-w-[720px] mx-auto px-6 md:px-10 py-20">
          <div className="border rounded p-12 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>INTERACTIVE ASSESSMENT</p>
            <p className="mt-4" style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              An 8-question self-assessment combining the Stakeholder Science booklet&apos;s quick assessment, the SEMM maturity framework, and the AI Adoption Audit methodology. Instant visual results with a consultation CTA.
            </p>
            <p className="mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-stakeholder)" }}>COMING SOON</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
