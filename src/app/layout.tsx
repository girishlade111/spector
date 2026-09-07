import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPECTOR — Design Agency",
  description: "Brand, Product, Web, Motion. We build brands and give them somewhere to live.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
