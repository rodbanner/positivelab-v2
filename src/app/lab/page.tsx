import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "The Lab | Positive Lab" };

const tools = [
  {
    name: "GEO Site Audit",
    status: "LIVE",
    desc: "Enter any URL and get an instant AI-readiness score. Analyses content quality, structured data, heading hierarchies, reading grade level, and crawlability.",
    url: "/answer-economy/geo-audit",
  },
  {
    name: "AI Readiness Assessment",
    status: "LIVE",
    desc: "9 to 16 questions. Instant results. Find out where your organisation sits on the AI adoption maturity curve.",
    url: "/tools/ai-assessment",
  },
  {
    name: "Brand DNA Diviner",
    status: "LIVE",
    desc: "Upload any corpus of brand material and extract the essential DNA – tone, values, positioning, personality. Works with annual reports, websites, campaign copy.",
    url: null,
  },
  {
    name: "Changemaker Story Writer",
    status: "LIVE",
    desc: "AI-assisted narrative creation for sustainability and ESG reporting. Feed it the data, get a human story back.",
    url: "/tools/story-maker",
  },
  {
    name: "Creative Brief Polisher",
    status: "LIVE",
    desc: "Drop in a rough creative brief and get a structured, agency-ready version back. Enforces the fundamentals that briefs routinely miss.",
    url: null,
  },
  {
    name: "Prompt Reviewer",
    status: "LIVE",
    desc: "Paste any AI prompt and get a critique with specific improvements. Analyses clarity, specificity, context, and output format.",
    url: "/tools/prompt-share",
  },
  {
    name: "Workflow Logger",
    status: "LIVE",
    desc: "Capture and document your team's AI workflows. Log prompts, processes, and outcomes to build an institutional playbook for what works.",
    url: "/tools/workflow-logger",
  },
  {
    name: "Scopa",
    status: "LIVE",
    desc: "Feed it a raw business idea and get an honest verdict. Scopa expands, stress-tests, and scores your concept so you can decide whether to pursue it or move on.",
    url: "https://scopa.biz",
  },
  {
    name: "Weightless Imagination",
    status: "LIVE",
    desc: "A structured creative thinking process that systematically removes constraints to unlock lateral solutions. Nine guided steps.",
    url: "/tools/weightless-imagination",
  },
  {
    name: "QA Reviewer Agent",
    status: "BETA",
    desc: "Automated quality assurance for content production. Checks consistency, accuracy, brand voice compliance, and factual claims.",
    url: null,
  },
];

export default function Lab() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-lab)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", fontWeight: 600 }}>
              The Lab
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 700 }}>
              Working tools. Not slide decks. Not proposals. Tools.
            </h1>
            <p className="mt-6" style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
              Everything here is built and working. Most were created using AI-assisted development – proof that you don&apos;t need a software team to ship useful products.
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {tools.map((tool, i) => {
              const inner = (
                <>
                  <div className="mb-4">
                    {tool.url ? (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", padding: "5px 14px", fontWeight: 600, background: "var(--color-lab)", display: "inline-block" }}>
                        LIVE — TRY IT →
                      </span>
                    ) : (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", padding: "5px 14px", fontWeight: 600, border: "1px solid var(--border)", display: "inline-block" }}>
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 8 }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.7 }}>
                    {tool.desc}
                  </p>
                </>
              );

              const isExternal = tool.url?.startsWith("http");

              return tool.url ? (
                isExternal ? (
                  <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer" className="no-underline block p-8 transition-colors duration-200 hover:brightness-110" style={{ background: "var(--bg-primary)" }}>
                    {inner}
                  </a>
                ) : (
                  <Link key={i} href={tool.url} className="no-underline block p-8 transition-colors duration-200 hover:brightness-110" style={{ background: "var(--bg-primary)" }}>
                    {inner}
                  </Link>
                )
              ) : (
                <div key={i} className="p-8" style={{ background: "var(--bg-primary)" }}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
