import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata = { title: "The 2026 Plan | Positive Lab" };

const tableHeaderStyle = {
  textAlign: "left" as const,
  padding: "12px 16px",
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "var(--text-tertiary)",
  fontWeight: 600,
};

const cellStyle = {
  padding: "14px 16px",
  color: "var(--text-secondary)",
  fontSize: 13,
  verticalAlign: "top" as const,
  lineHeight: 1.7,
};

const cellBoldStyle = {
  ...cellStyle,
  fontWeight: 500,
  color: "var(--text-primary)",
  fontSize: 14,
};

export default function Plan2026() {
  return (
    <ArticleLayout pillar="Stakeholder Science" pillarColor="var(--color-stakeholder)" pillarHref="/stakeholder-science" tag="Strategic Plan" title="The 2026 Plan" subtitle="From exploration to industrialisation. PCG's transformation agenda for embedding AI agents across core enterprise workflows." readTime="12 min read">

      <p>This plan outlines Positive Change Group&apos;s transformation agenda for 2026, building upon the foundational AI strategy developed in 2025. The vision remains unchanged – to become the global leader in AI-enhanced stakeholder engagement, setting new standards and future-proofing the business for the digital era.</p>

      <p>The shift is one of gear. Our focus moves from initial exploration to <strong>industrialisation</strong> – embedding AI agents across core enterprise workflows to drive exponential growth, operational efficiency, and sustained competitive advantage.</p>

      <h2>The Big Rethink</h2>

      <p>The shift to agentic AI requires moving beyond generative tools to systems that plan and execute elements of, or entire, workflows. These recommendations focus on building an AI-first operating model that transforms our capabilities and value proposition.</p>

      <h3>1. Seek competitive advantage through data and technology</h3>

      <p>In an age where AI lowers entry barriers and puts institutional expertise at risk, our competitive advantage must pivot to data, technology, and enterprise-wide capabilities.</p>

      <p><strong>Realise the PCG BRAIN as the definitive moat.</strong> Navigating corporate-wide knowledge requires a Unified Retrieval Layer and a Single Agent Platform. This platform must leverage secure knowledge graphs to ground agents in verified entities and relationships, ensuring accuracy and reliability, and turning organisational knowledge into a single source of truth.</p>

      <p><strong>Architect for reuse and scalability.</strong> AI models, pipelines, and systems must be designed for reuse across UK and APAC operating companies, ensuring common workflows and data standards.</p>

      <p><strong>Invest in domain-specific models.</strong> We will prioritise small language models (SLMs) and domain-specific language models (DSLMs). These offer improved latency, cost control, transparency, and often match larger models for specific tasks – essential for regulated sectors. But the principal reason is to generate IP and value to the business that may prove more elusive if our strategy relies purely on the hyperscalers.</p>

      <h3>2. Rewire core workflows</h3>

      <p>True commercial impact comes from thinking &ldquo;AI inside&rdquo; – embedding AI into specific domains where we create most value, domains that are most easily defensible, and rewiring workflows end-to-end rather than running disjointed pilots.</p>

      <p><strong>Target vertical reinvention.</strong> Focus on commercial and delivery verticals where agentic AI can create a step change in performance – proposal production, client intelligence, and quality assurance.</p>

      <p><strong>Transform productivity measurement.</strong> Shift the definition of productivity away from time-based metrics towards results defined by how many agents the business can effectively orchestrate.</p>

      <p><strong>Embrace the hybrid team model.</strong> Redesign roles around effective human–agent collaboration, elevating human teams by automating high-volume tasks.</p>

      <h3>3. Build a permanent beta culture and AI fluency</h3>

      <p>Success in a world of rapid innovation requires an organisation to learn and adapt faster than its competitors.</p>

      <p><strong>Implement ethical governance at speed.</strong> Rewire governance to balance speed with accountability, creating systems where human accountability and agent speed reinforce each other. This includes defining clear guardrails, audit trails, and human-in-the-loop checkpoints for high-risk decisions.</p>

      <p><strong>Focus talent on future skills.</strong> Evolve talent management to focus on skills (workflow design, AI supervision) rather than roles, counteracting the shortening shelf life of skills.</p>

      <p><strong>Lead the debate on Stakeholder Science.</strong> Use AI authority to strengthen reputation, carving out a unique positioning for PCG. Establish Stakeholder Science as a recognised discipline through thought leadership, events, and academic partnerships.</p>

      <h2>2026 priorities</h2>

      <p>The following priorities align directly with the four core objectives set out in the initial plan.</p>

      <div style={{ overflowX: "auto", margin: "32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={tableHeaderStyle}>Objective</th>
              <th style={tableHeaderStyle}>2026 Priority</th>
              <th style={tableHeaderStyle}>Key Metrics</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>1. Realise the PCG BRAIN</td>
              <td style={cellStyle}>Stand up the Group-wide Single Agent Platform and Unified Retrieval Layer.</td>
              <td style={cellStyle}>Platform reliability; cost per task; policy compliance.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>2. Realise our proposition</td>
              <td style={cellStyle}>Launch new revenue-driving AI products and thought leadership to secure long-term revenue streams.</td>
              <td style={cellStyle}><strong>£5m AI service revenue</strong> (Year 1); <strong>40% recurring revenue</strong> (Year 2).</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>3. Enhance our operating model</td>
              <td style={cellStyle}>Industrialise core commercial and delivery workflows across UK and APAC for measurable efficiency gains.</td>
              <td style={cellStyle}><strong>25% revenue-per-employee increase</strong>; rework rate reduction.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>4. Improve commercial performance</td>
              <td style={cellStyle}>Accelerate revenue growth and margin protection by augmenting the entire commercial lifecycle.</td>
              <td style={cellStyle}>Win-rate increase; average selling price increase; <strong>95%+ client retention</strong>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The roadmap</h2>

      <p>The implementation moves through three phases – from establishing the technical foundation, to scaling internal efficiency, to industrialising new product lines.</p>

      <h3>Phase 1 – Foundation and first wins (Q1 2026)</h3>

      <p>This phase focuses on immediate operational efficiency gains and laying the secure technical and governance groundwork.</p>

      <div style={{ overflowX: "auto", margin: "32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={tableHeaderStyle}>Focus area</th>
              <th style={tableHeaderStyle}>Key initiatives</th>
              <th style={tableHeaderStyle}>Supporting technology</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Governance &amp; Platform</td>
              <td style={cellStyle}>Establish AI Steering Group spanning Delivery, Commercial, Finance, Legal, Risk and IT, meeting monthly. Stand up the Single Agent Platform, Unified Retrieval Layer, access controls, and logging infrastructure. Define guardrails and human-in-the-loop checkpoints. Launch AI Academy with role-based training.</td>
              <td style={cellStyle}>LLM Reasoning Models; GenAI Engineering Tools.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Commercial &amp; Delivery</td>
              <td style={cellStyle}>Ship three &ldquo;no regrets&rdquo; agents – Proposal Agent, QA Reviewer, and Knowledge Search. Define evaluation metrics and start weekly value reporting cadence. Begin MVP launch of Stakeholder Intelligence Platform (SIP) with 3–5 key clients.</td>
              <td style={cellStyle}>Proposal Agent; QA Reviewer Agent.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Proposition</td>
              <td style={cellStyle}>Determine key AI communication pillars and assign leaders for thought leadership creation. Formulate a PCG-wide communications and events programme.</td>
              <td style={cellStyle}>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Phase 2 – Scale and integration (Q2–Q3 2026)</h3>

      <p>This phase aims to standardise quality across the Group, deploy more sophisticated operational agents, and expand the revenue platform.</p>

      <div style={{ overflowX: "auto", margin: "32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={tableHeaderStyle}>Focus area</th>
              <th style={tableHeaderStyle}>Key initiatives</th>
              <th style={tableHeaderStyle}>Supporting technology</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Platform &amp; Operations</td>
              <td style={cellStyle}>Standardise Intake and QA agents across UK/APAC to ensure conformity and consistent service levels. Publish the AI agent service catalogue. Fully integrate Capacity Planner with resourcing and pipeline data.</td>
              <td style={cellStyle}>Capacity &amp; Skills Planner; QA Reviewer Agent.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Commercial &amp; Financial</td>
              <td style={cellStyle}>Deploy advanced commercial agents – deal-desk pricing advisor and margin early-warning sentry. Pilot the Finance sentry and Contract compliance checker with explicit human approval workflow.</td>
              <td style={cellStyle}>Deal-desk pricing advisor; Margin early-warning sentry.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Proposition</td>
              <td style={cellStyle}>Scale SIP to 20+ clients and introduce truth verification pilot. Launch Culture Intelligence as a Service (CIaaS) offering pilot with People Made. Develop proof-of-concept for the AI-Powered Disclosure Automation Suite.</td>
              <td style={cellStyle}>Knowledge Agents (SIP, CIaaS); Reasoning Models.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Phase 3 – Industrialisation and transformation (Q4 2026 onwards)</h3>

      <p>The final phase focuses on embedding agents into client-facing propositions, maturing governance, and establishing the foundation for long-term growth and reputation.</p>

      <div style={{ overflowX: "auto", margin: "32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={tableHeaderStyle}>Focus area</th>
              <th style={tableHeaderStyle}>Key initiatives</th>
              <th style={tableHeaderStyle}>Supporting technology</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Client Propositions</td>
              <td style={cellStyle}>Embed successful agents (account intelligence digests, for example) into client-facing propositions, ensuring transparent disclosure of AI usage. Launch the Transparency Lab initiative to explore ethical disclosure protocols and AI-generated stakeholder reports. Develop IP protection strategy and initial patents.</td>
              <td style={cellStyle}>Action Agents (connecting multiple systems).</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Governance &amp; Culture</td>
              <td style={cellStyle}>Mature governance model with advanced bias testing and incident playbooks. Launch The Stakeholder Science Summit (annual flagship event) and The Truth Talks webinar series to lead market debate. Begin scoping for the PCG Academy for Stakeholder Science certification.</td>
              <td style={cellStyle}>Multi-agent systems.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellBoldStyle}>Commercial</td>
              <td style={cellStyle}>Finalise business cases for international expansion and new industry-specific solutions (Financial Services, Energy, Pharma) based on pilot results. Consolidate platform usage to drive improved salary multiple (3.5x target) and hit £5m AI service revenue target.</td>
              <td style={cellStyle}>GraphRAG to enhance agent precision and reliability.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The destination</h2>

      <p>This plan ensures that Positive Change Group moves decisively from adopting AI tools to deploying sophisticated, coordinated multi-agent systems at the core of the enterprise. It is an agenda that demands a new kind of leadership – one that is bold, adaptive, and prepared to challenge the status quo to create long-term prosperity and trust.</p>

      <p>The measure of success is not whether we use AI. Every firm will use AI. The measure is whether we have built a business where AI is so deeply embedded in our workflows, our products, and our client relationships that the distinction between &ldquo;AI services&rdquo; and &ldquo;our services&rdquo; ceases to exist.</p>

      <p>That is the 2026 objective. That is what industrialisation means.</p>

    </ArticleLayout>
  );
}
