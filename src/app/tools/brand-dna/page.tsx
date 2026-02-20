"use client";

import { useEffect } from "react";

export default function BrandDNA() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://bdna-1.replit.app";
    return () => {};
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div style={{ height: 4, background: "var(--color-lab)" }} />
      <iframe
        src="https://bdna-1.replit.app"
        style={{
          width: "100%",
          height: "calc(100vh - 4px)",
          border: "none",
        }}
        allow="clipboard-write"
        title="Brand DNA Diviner"
      />
    </div>
  );
}
