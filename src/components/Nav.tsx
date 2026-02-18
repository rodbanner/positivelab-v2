"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PveMan } from "./PveMan";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/answer-economy", label: "Answer Economy", color: "var(--color-answer)" },
  { href: "/stakeholder-science", label: "Stakeholder Science", color: "var(--color-stakeholder)" },
  { href: "/futures", label: "AI Futures", color: "var(--color-futures)" },
  { href: "/lab", label: "The Lab", color: "var(--color-lab)" },
  { href: "/about", label: "About", color: "var(--color-about)" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
              <PveMan size={20} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, color: "var(--text-primary)" }}>
                Positive Lab
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="no-underline px-3 py-1.5 transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      color: isActive ? item.color : "var(--text-tertiary)",
                      borderBottom: isActive ? `1px solid ${item.color}` : "1px solid transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Subtext */}
            <div className="hidden lg:block" style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>
              PCG · AI &amp; INNOVATION
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden bg-transparent border-none cursor-pointer" style={{ color: "var(--text-primary)" }} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-14 md:hidden" style={{ background: "var(--bg-primary)" }}>
          <div className="flex flex-col p-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="no-underline py-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
