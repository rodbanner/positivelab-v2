import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Positive Lab | AI & Innovation | Positive Change Group",
  description: "Original thinking, working tools, and practical strategy from the frontline of enterprise AI transformation.",
  openGraph: {
    title: "Positive Lab",
    description: "Where stakeholder intelligence meets the AI revolution",
    siteName: "Positive Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: `if(location.hostname==='audit.positivelab.ai'){location.replace('https://www.positivelab.ai/answer-economy/geo-audit')}` }} />
        {children}
        <div dangerouslySetInnerHTML={{ __html: '<elevenlabs-convai agent-id="agent_6101k481nkkmemtrn98zbn25z7pf"></elevenlabs-convai>' }} />
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
      </body>
    </html>
  );
}
