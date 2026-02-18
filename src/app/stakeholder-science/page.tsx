import { SectionLayout } from "@/components/SectionLayout";

export const metadata = { title: "Stakeholder Science | Positive Lab" };

export default function StakeholderScience() {
  return (
    <SectionLayout
      title="Stakeholder Science"
      subtitle="The emerging discipline where data meets engagement – moving from art to science, from intuition to intelligence"
      color="var(--color-stakeholder)"
      items={[
        { href: "/stakeholder-science/assessment", tag: "INTERACTIVE TOOL", title: "AI Readiness Assessment", desc: "Eight questions. Instant results. Find out where your organisation sits on the stakeholder science maturity curve." },
        { href: "/stakeholder-science/brain", tag: "PLATFORM", title: "PCG BRAIN", desc: "The stakeholder intelligence platform – a single, unified view of every stakeholder relationship across your organisation." },
      ]}
    />
  );
}
