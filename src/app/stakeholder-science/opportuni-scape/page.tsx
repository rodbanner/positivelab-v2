import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata = { title: "The PCG Opportuni-scape | Positive Lab" };

export default function Opportuniscape() {
  return (
    <ArticleLayout pillar="Stakeholder Science" pillarColor="var(--color-stakeholder)" pillarHref="/stakeholder-science" tag="Framework" title="The PCG Opportuni-scape" subtitle="A brutal, honest audit of which tasks AI can already do, how well it does them, and where people remain irreplaceable." readTime="6 min read">

      <p>There is a question that every professional services firm should be asking itself right now, and most are not. It is this: for each thing we do, could a well-equipped individual with AI do it faster, cheaper, and at comparable quality?</p>

      <p>We asked it of ourselves. The answers were uncomfortable but clarifying. What follows is the PCG Opportuni-scape – a candid assessment of where AI sits today across our core activities, what it saves us, and where human expertise remains genuinely irreplaceable.</p>

      <p>The point is not to be pessimistic about our future. It is to be honest about where the value lies – so we can invest in the things that matter and stop pretending that everything we do is equally defensible.</p>

      <h2>The assessment</h2>

      <div style={{ overflowX: "auto", margin: "32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Task</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Can AI do this?</th>
              <th style={{ textAlign: "center", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Quality</th>
              <th style={{ textAlign: "center", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Time saved</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>What remains human</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Strategic planning &amp; business plans</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Yes – first drafts</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>8/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>70%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Political judgment and stakeholder nuance</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Thought leadership articles</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Yes – with voice training</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>7/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>60%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Editorial instinct and original thinking</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Employee task mapping &amp; automation</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Yes – completely</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>9/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>80%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Very little. 12–18 months to full agent deployment.</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Client proposal development</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Yes – drafts and research</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>7/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>50%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Relationship context and pricing strategy</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Event curation and panel prep</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Partially</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>6/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>40%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Curation of who to invite and why – proprietary advantage</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Go-to-market strategy</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>Yes – analysis and frameworks</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>8/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-lab)" }}>50%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Industry relationships for validation</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>Networking and relationship brokering</td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)" }}>No</td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>2/10</span></td>
              <td style={{ padding: "14px 16px", textAlign: "center" }}><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>10%</span></td>
              <td style={{ padding: "14px 16px", color: "var(--text-secondary)", fontSize: 13 }}>Everything. This is the moat.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What the data tells us</h2>

      <p>Three patterns emerge from this exercise, and they are worth stating plainly.</p>

      <p><strong>Most of what we do is already AI-accessible.</strong> Five of seven core activities can be substantially automated today – not in theory, not in a research lab, but using tools available to any competitor with a laptop and a subscription. The average time saving across all tasks is roughly 51%. That is not a marginal efficiency gain. It is a structural shift in the economics of professional services.</p>

      <p><strong>Quality is already high enough.</strong> The average quality score is 6.7 out of 10. That is not perfect – but it is good enough to compete. And good enough is the threshold that matters. Clients do not need a 10/10 strategic plan. They need an 8/10 plan delivered in a week instead of a month. AI delivers that today.</p>

      <p><strong>The human premium is narrow but deep.</strong> Look at the right-hand column. The things AI cannot do fall into a tight cluster – political judgment, relationship context, editorial instinct, curation based on proprietary knowledge, and the ability to broker connections between people. These are not generic skills. They are the accumulated product of years of experience, thousands of relationships, and a kind of contextual intelligence that no model can simulate.</p>

      <h2>The uncomfortable conclusion</h2>

      <p>If you are a professional services firm and your value proposition rests on activities in the top half of this table – strategic planning, content creation, analysis, proposal development – you are in a race against automation. Not because AI will replace you tomorrow, but because a smaller, leaner competitor using AI will undercut you on price and match you on quality within the next 18 months.</p>

      <p>The firms that thrive will be those that honestly audit their own capability landscape, invest heavily in the things AI cannot do, and use AI to deliver everything else faster and cheaper than the competition.</p>

      <p>We built this framework for ourselves. But it applies to every knowledge-intensive business. The question is not whether to do this exercise. It is whether you do it before your competitors do.</p>

      <h2>How to build your own Opportuni-scape</h2>

      <p>The methodology is deliberately simple. For each significant task your organisation performs, answer four questions.</p>

      <p><strong>Can AI do this now?</strong> Not in the future. Not with custom development. Right now, with off-the-shelf tools. Be honest. Most people overestimate the gap between human and AI output because they tested AI eighteen months ago and have not looked since.</p>

      <p><strong>What quality does it achieve?</strong> Score it out of ten, relative to what a competent professional would produce. Remember that clients often value speed and cost over the last 10% of quality refinement.</p>

      <p><strong>How much time does it save?</strong> Estimate the percentage of the total task timeline that AI can compress. Include research, drafting, analysis, and review time – not just the final deliverable.</p>

      <p><strong>What remains irreplaceably human?</strong> This is the critical column. Be specific. "Creativity" is not an answer – AI is creative. "Relationships" is closer. "The judgment to know which of six stakeholders to call first when a crisis breaks, based on fifteen years of working with this client" is the real answer.</p>

      <p>Run this exercise across your entire operation and the strategic picture becomes very clear, very quickly. The tasks where AI scores high and human uniqueness scores low are your automation priorities. The tasks where AI scores low and human uniqueness scores high are your competitive moat. Everything in between is where the real strategic decisions live.</p>

    </ArticleLayout>
  );
}
