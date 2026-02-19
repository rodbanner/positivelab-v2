"use client";
import { Nav } from "@/components/Nav";
import { useEffect } from "react";

export default function PromptShare() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "//embed.typeform.com/next/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { if (s.parentNode) s.parentNode.removeChild(s); };
  }, []);

  return (
    <>
      <Nav />
      <main className="pt-14">
        <div style={{ height: 4, background: "var(--color-lab)" }} />
        <div style={{ width: "100%", minHeight: "calc(100vh - 62px)" }}>
          <div data-tf-live="01JXJ4AZTCVXRRTS26Z4GGSFDP" style={{ width: "100%", height: "calc(100vh - 62px)" }} />
        </div>
      </main>
    </>
  );
}
