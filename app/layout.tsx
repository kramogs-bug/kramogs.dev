import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kramogs.Dev — Automation Specialist & System Builder",
  description:
    "Kramogs.Dev builds practical automation systems, workflow tools, and web applications that turn repetitive work into reliable processes.",
  keywords: ["Kramogs.Dev", "portfolio", "computer engineering", "automation", "web development", "workflow tools"],
  openGraph: {
    title: "Kramogs.Dev — Automation Specialist & System Builder",
    description: "Practical automation systems, workflow tools, and web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#082a2f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
