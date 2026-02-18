import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = { title: "Stakeholder Science | Positive Lab" };

export default function StakeholderScience() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Section header */}
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div style={{ height: 4, background: "var(--color-stakeholder)" }} />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-stakeholder)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
              Stakeholder Science
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 700 }}>
              When intuition meets intelligence in stakeholder engagement
            </h1>
            <p className="mt-6" style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 560, lineHeight: 1.7, fontWeight: 300 }}>
              Stakeholder Science is the emerging discipline that transforms engagement from art to science. It combines behavioural data, AI-driven analysis, and decades of relationship expertise into a rigorous, repeatable methodology.
            </p>
          </div>
        </div>

        {/* External site link */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
          <a href="https://stakeholderscience.com" target="_blank" rel="noopener noreferrer" className="no-underline group block border-b py-8 transition-all duration-200 hover:pl-3" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", color: "var(--color-stakeholder)", fontWeight: 600, minWidth: 90 }}>
                THE DISCIPLINE
              </span>
              <div className="flex-1">
                <h2 className="transition-colors flex items-center gap-3" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--text-primary)" }}>
                  stakeholderscience.com
                  <ExternalLink size={16} style={{ color: "var(--text-tertiary)" }} />
                </h2>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 300 }}>
                  The full methodology, frameworks, and case studies. A dedicated site exploring the science of stakeholder engagement in depth.
                </p>
              </div>
              <span className="hidden md:block transition-all duration-200 opacity-0 group-hover:opacity-50" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>
                →
              </span>
            </div>
          </a>

          <Link href="/stakeholder-science/brain" className="no-underline group block border-b py-8 transition-all duration-200 hover:pl-3" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", color: "var(--color-stakeholder)", fontWeight: 600, minWidth: 90 }}>
                PLATFORM
              </span>
              <div className="flex-1">
                <h2 className="transition-colors" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--text-primary)" }}>
                  PCG BRAIN
                </h2>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 300 }}>
                  The stakeholder intelligence platform – a single, unified view of every stakeholder relationship across your organisation.
                </p>
              </div>
              <span className="hidden md:block transition-all duration-200 opacity-0 group-hover:opacity-50" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>
                →
              </span>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
