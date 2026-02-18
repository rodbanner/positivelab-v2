import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PveMan } from "@/components/PveMan";

export const metadata = { title: "Manifesto | Positive Lab" };

export default function Manifesto() {
  return (
    <>
      <Nav />
      <main className="pt-14 grid-bg" style={{ minHeight: "100vh" }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 md:py-40 relative">
          <div className="absolute top-20 right-0 hidden md:block">
            <PveMan size={400} opacity={0.15} />
          </div>

          <div className="relative z-10">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 48 }}>
              MANIFESTO
            </p>

            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 300, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
              <p style={{ marginBottom: 32 }}>
                We act fast, because waiting kills opportunity and problems won&apos;t solve themselves.
              </p>
              <p style={{ marginBottom: 32 }}>
                We face the tough stuff first, knowing that the uncomfortable question usually unlocks the real answer.
              </p>
              <p style={{ marginBottom: 32 }}>
                We speak plainly, because clarity builds trust while jargon only clouds it.
              </p>
              <p style={{ marginBottom: 32 }}>
                We use AI to see further, extending our vision while keeping human hands firmly on the wheel.
              </p>
              <p>
                And we measure real progress by what changes between Monday and Friday, not by the presentations we give.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
