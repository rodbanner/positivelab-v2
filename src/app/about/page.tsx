import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export const metadata = { title: "About | Positive Lab" };

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              <div className="flex-shrink-0">
                <Image src="/rod-banner.jpg" alt="Rod Banner" width={107} height={133} className="object-cover" style={{ borderRadius: 4 }} />
              </div>
              <div>
                <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-about)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
                  Advisory
                </div>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                  Rod Banner
                </h1>
                <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300, maxWidth: 600 }}>
                  AI Czar at the Positive Change Group. Building the intelligence layer for stakeholder engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "var(--bg-reading)" }}>
          <div className="max-w-[720px] mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="article-prose">
              <p>Rod describes himself as &ldquo;a self-taught technologist with a decent grasp of brand and marketing.&rdquo; If he has accomplished anything of significance, it usually involved quenching complexity and sharpening stories to build world-dominating, tech-centric brands.</p>

              <p>Over the years he has helped to found, grow, and exit a series of technology companies, and been fortunate enough to work with some of the world&apos;s smartest people. Since 2022, he has been totally immersed in generative AI – appointed by the Positive Change Group to catalyse and optimise the opportunities these technologies bring to the group and its clients.</p>

              <h2>The Positive Change Group</h2>

              <p>PCG is a stakeholder engagement consultancy comprising three operating companies: Black Sun (financial and environmental reporting), People Made (brand and culture consulting), and Stratton Craig (content strategy). Together they serve over 150 global clients.</p>

              <h2>Speaking and events</h2>

              <p>Rod speaks on AI transformation, the Answer Economy, Stakeholder Science, and the future of enterprise. He hosts the annual Snowball ski conference – an exclusive gathering of business leaders and investors.</p>

              <h2>Recognition</h2>

              <p>TechCity Insider 100. Fresh Business Thinking Power 100. The Maserati 100. Smith &amp; Williamson Power 100. GQ&apos;s 100 Most Connected Men in Britain. Fellow of the RSA. Member of the Worshipful Company of Information Technologists.</p>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 border text-center" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 12 }}>
                GET IN TOUCH
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", fontWeight: 300, marginBottom: 16 }}>
                For speaking engagements, advisory work, or to discuss AI transformation.
              </p>
              <a href="/contact" className="no-underline inline-block px-6 py-3 transition-opacity hover:opacity-80" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", background: "var(--color-about)" }}>
                CONTACT →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
