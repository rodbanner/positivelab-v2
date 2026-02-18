import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
