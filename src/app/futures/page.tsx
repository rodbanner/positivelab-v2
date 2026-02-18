import { SectionLayout } from "@/components/SectionLayout";

export const metadata = { title: "AI Futures | Positive Lab" };

export default function Futures() {
  return (
    <SectionLayout
      title="AI Futures"
      subtitle="Provocations on where artificial intelligence takes enterprise, talent, and competitive advantage next"
      color="var(--color-futures)"
      items={[
        { href: "/futures/arbitrage-window", tag: "ESSAY", title: "The AI Arbitrage Window", desc: "There's a shrinking window of competitive advantage for businesses that move fast on AI. The parallels with high-frequency trading are striking." },
        { href: "/futures/enterprise-survival", tag: "ESSAY", title: "Will the Enterprise Survive GenAI?", desc: "The traditional enterprise is ceding ground to a new organisational formula – fluid talent, bite-sized projects, and continuous reinvention." },
        { href: "/futures/great-levelling", tag: "ESSAY", title: "The Great Levelling", desc: "AI is collapsing traditional competitive moats – scale, proprietary data, specialist knowledge. What replaces them?" },
        { href: "/futures/colleague", tag: "ESSAY", title: "The Colleague That Never Sleeps", desc: "AI isn't replacing knowledge workers. It's becoming a permanent, always-on collaborator that changes what knowledge work means." },
      ]}
    />
  );
}
