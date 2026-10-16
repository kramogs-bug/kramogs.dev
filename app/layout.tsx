import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "John Mark Valdez | Computer Engineering Portfolio",
  description:
    "Portfolio of John Mark R. Valdez, a Computer Engineering student and full-stack automation developer seeking a 480-hour OJT.",
  keywords: [
    "John Mark Valdez",
    "computer engineering student",
    "OJT portfolio",
    "full-stack developer",
    "automation developer",
    "Next.js",
  ],
  openGraph: {
    title: "John Mark Valdez | Computer Engineering Portfolio",
    description: "Full-stack web projects, automation tools, and engineering experience.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f6f3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary antialiased">{children}</body>
    </html>
  );
}
