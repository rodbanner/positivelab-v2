"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <Nav />
        <main className="pt-14" style={{ minHeight: "100vh" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col items-center justify-center" style={{ minHeight: "60vh" }}>
            <div style={{ width: 48, height: 48, background: "var(--color-lab)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, fontSize: 22 }}>
              ✓
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 12, textAlign: "center" }}>
              Message sent
            </h1>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", fontWeight: 300, textAlign: "center", maxWidth: 400 }}>
              Thank you for getting in touch. Rod will come back to you shortly.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="pt-14">
        <div className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="inline-block mb-6 px-3 py-1.5" style={{ background: "var(--color-about)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontWeight: 600 }}>
              Get in touch
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 700 }}>
              Let&apos;s talk
            </h1>
            <p className="mt-6" style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
              Whether it&apos;s AI strategy, stakeholder engagement, speaking, or something else entirely &ndash; start a conversation.
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <div className="flex-1 max-w-[560px]">
              <form
                action="https://formsubmit.co/rod@banner.net"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  }).then(() => setSubmitted(true)).catch(() => setSubmitted(true));
                }}
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="Positive Lab – new enquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    style={{
                      width: "100%", padding: "12px 16px", fontSize: 15,
                      fontFamily: "var(--font-body)", fontWeight: 300,
                      background: "var(--bg-primary)", color: "var(--text-primary)",
                      border: "1px solid var(--border)", outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-about)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={{
                      width: "100%", padding: "12px 16px", fontSize: 15,
                      fontFamily: "var(--font-body)", fontWeight: 300,
                      background: "var(--bg-primary)", color: "var(--text-primary)",
                      border: "1px solid var(--border)", outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-about)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    style={{
                      width: "100%", padding: "12px 16px", fontSize: 15,
                      fontFamily: "var(--font-body)", fontWeight: 300,
                      background: "var(--bg-primary)", color: "var(--text-primary)",
                      border: "1px solid var(--border)", outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-about)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                    What can I help with?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    style={{
                      width: "100%", padding: "12px 16px", fontSize: 15,
                      fontFamily: "var(--font-body)", fontWeight: 300,
                      background: "var(--bg-primary)", color: "var(--text-primary)",
                      border: "1px solid var(--border)", outline: "none",
                      transition: "border-color 0.2s", resize: "vertical",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-about)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "14px 36px", background: "var(--color-about)", color: "#FFFFFF",
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    border: "none", cursor: "pointer", transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = "0.85"}
                  onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
                >
                  Send message →
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:border-l lg:pl-16" style={{ borderColor: "var(--border)" }}>
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                  Direct
                </p>
                <a href="mailto:rod@banner.net" style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 300 }}>
                  rod@banner.net
                </a>
              </div>
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                  LinkedIn
                </p>
                <a href="https://www.linkedin.com/in/rodbanner/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 300 }}>
                  linkedin.com/in/rodbanner
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 8, fontWeight: 600 }}>
                  Based in
                </p>
                <p style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 300 }}>
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
