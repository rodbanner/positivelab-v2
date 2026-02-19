"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PveMan } from "@/components/PveMan";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "answer",
    href: "/answer-economy",
    label: "Answer Economy",
    color: "var(--color-answer)",
    items: [
      { title: "The Answer Economy", tag: "WHITE PAPER", href: "/answer-economy/white-paper", desc: "How AI search is rewriting the rules of digital discovery – and what to do about it" },
      { title: "GEO: A Practical Guide", tag: "GUIDE", href: "/answer-economy/geo-guide", desc: "Actionable framework for generative engine optimisation" },
      { title: "GEO Site Audit", tag: "TOOL", href: "/answer-economy/geo-audit", desc: "Test how visible your website is to AI search engines" },
    ],
  },
  {
    id: "stakeholder",
    href: "/stakeholder-science",
    label: "Stakeholder Science",
    color: "var(--color-stakeholder)",
    items: [
      { title: "The Discipline", tag: "EXTERNAL SITE", href: "https://stakeholderscience.com", desc: "The full methodology, frameworks, and case studies at stakeholderscience.com" },
      { title: "PCG BRAIN", tag: "PLATFORM", href: "/stakeholder-science/brain", desc: "The stakeholder intelligence platform – a unified view of every relationship" },
    ],
  },
  {
    id: "futures",
    href: "/futures",
    label: "AI Futures",
    color: "var(--color-futures)",
    items: [
      { title: "The AI Arbitrage Window", tag: "ESSAY", href: "/futures/arbitrage-window", desc: "There's a shrinking window of competitive advantage for businesses that move fast on AI. The parallels with high-frequency trading are striking." },
      { title: "Will the Enterprise Survive?", tag: "ESSAY", href: "/futures/enterprise-survival", desc: "Fluid talent and the obsolescence of the traditional corporation" },
      { title: "The Great Levelling", tag: "ESSAY", href: "/futures/great-levelling", desc: "When every competitor can do everything" },
      { title: "The Colleague That Never Sleeps", tag: "ESSAY", href: "/futures/colleague", desc: "AI as permanent intellectual collaborator" },
    ],
  },
  {
    id: "lab",
    href: "/lab",
    label: "The Lab",
    color: "var(--color-lab)",
    items: [
      { title: "GEO Site Audit", tag: "LIVE", href: "/answer-economy/geo-audit", desc: "AI search readiness scoring" },
      { title: "AI Readiness Assessment", tag: "LIVE", href: "/tools/ai-assessment", desc: "Eight questions to benchmark your AI adoption maturity" },
      { title: "Brand DNA Diviner", tag: "LIVE", href: "/lab", desc: "Extract brand essence from any corpus" },
      { title: "Changemaker Story Writer", tag: "LIVE", href: "/lab", desc: "AI-assisted narrative creation" },
      { title: "Weightless Imagination", tag: "LIVE", href: "/lab", desc: "Structured creative thinking tool" },
    ],
  },
  {
    id: "about",
    href: "/about",
    label: "Advisory",
    color: "var(--color-about)",
    items: [
      { title: "Rod Banner", tag: "BIO", href: "/about", desc: "AI Czar, Positive Change Group. Chairman, AskDitto.io" },
      { title: "Speaking & Events", tag: "ENGAGE", href: "/about", desc: "Keynotes, panels, and advisory" },
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("answer");
  const active = pillars.find((p) => p.id === activeTab)!;

  return (
    <>
      <Nav />
      <main className="pt-14 grid-bg" style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="flex-1">
              <div className="inline-block mb-6 px-3 py-1.5 transition-colors duration-500" style={{ background: active.color, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
                INTELLIGENCE · TOOLS · STRATEGY
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Building the{" "}
                <span className="transition-colors duration-500" style={{ fontWeight: 500, color: active.color }}>
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
                  <div className="transition-colors duration-500" style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300, letterSpacing: "-0.02em", color: i === 0 ? active.color : "var(--text-primary)" }}>
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

        {/* Tab bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex border-t border-b overflow-x-auto" style={{ borderColor: "var(--border)" }}>
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className="flex-1 min-w-[120px] py-4 bg-transparent border-none cursor-pointer transition-all duration-300 text-center"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: activeTab === p.id ? 600 : 400,
                  color: activeTab === p.id ? p.color : "var(--text-secondary)",
                  borderBottom: activeTab === p.id ? `3px solid ${p.color}` : "3px solid transparent",
                  background: activeTab === p.id ? "rgba(0,0,0,0.02)" : "transparent",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content for active tab */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 pb-20">
          {active.items.map((item, i) => {
            const isExternal = item.href.startsWith("http");
            const Wrapper = isExternal ? "a" : Link;
            const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Wrapper key={i} href={item.href} {...extraProps} className="no-underline group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b transition-all duration-200 hover:pl-3" style={{ borderColor: "var(--border)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", color: active.color, fontWeight: 600, minWidth: 80 }}>
                  {item.tag}
                </span>
                <div className="flex-1">
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 4, color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
                <ArrowRight size={14} className="hidden md:block opacity-0 group-hover:opacity-40 transition-opacity" style={{ color: "var(--text-primary)" }} />
              </Wrapper>
            );
          })}
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
