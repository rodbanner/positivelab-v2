"use client";

import { Nav } from "@/components/Nav";

export default function AIDailyPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 56, width: "100vw", height: "100vh", overflow: "hidden" }}>
        <div style={{ height: 4, background: "var(--color-lab)" }} />
        <iframe
          src="https://genai-news.replit.app"
          style={{
            width: "100%",
            height: "calc(100vh - 60px)",
            border: "none",
          }}
          allow="clipboard-write"
          title="AI Daily"
        />
      </div>
    </>
  );
}
