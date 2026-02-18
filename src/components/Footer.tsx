import Link from "next/link";
import { PveMan } from "./PveMan";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center gap-3">
            <PveMan size={24} opacity={0.4} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
                Positive Lab
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 4 }}>
                A Positive Change Group initiative
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>Thinking</span>
              <Link href="/answer-economy" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>Answer Economy</Link>
              <Link href="/futures" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>AI Futures</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>Build</span>
              <Link href="/stakeholder-science" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>Stakeholder Science</Link>
              <Link href="/lab" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>The Lab</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>Connect</span>
              <Link href="/about" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>About</Link>
              <a href="https://www.positivechangegroup.com" target="_blank" rel="noopener" className="no-underline" style={{ fontSize: 13, color: "var(--text-secondary)" }}>PCG</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>
            © 2026 THE POSITIVE CHANGE GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
