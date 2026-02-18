import { SectionLayout } from "@/components/SectionLayout";

export const metadata = { title: "The Answer Economy | Positive Lab" };

export default function AnswerEconomy() {
  return (
    <SectionLayout
      title="The Answer Economy"
      subtitle="How AI search is rewriting the rules of digital discovery – and what to do about it"
      color="var(--color-answer)"
      items={[
        { href: "/answer-economy/white-paper", tag: "WHITE PAPER", title: "The Answer Economy", desc: "How AI search is rewriting the rules of digital discovery – and what to do about it. The flagship analysis of the shift from SEO to GEO." },
        { href: "/answer-economy/geo-guide", tag: "PRACTICAL GUIDE", title: "GEO: A Practical Guide for Business Leaders", desc: "Less theory, more action. A step-by-step framework for optimising your digital presence for AI search engines." },
        { href: "/answer-economy/geo-audit", tag: "INTERACTIVE TOOL", title: "GEO Site Audit", desc: "Enter a URL and get an instant AI-readiness score. See exactly where your website is falling short – and how to fix it." },
      ]}
    />
  );
}
