import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheeler Manufacturing Co. Inc. : Wheeler Jewelry",
  description: "Wheeler Manufacturing is a family owned domestic jewelry manufacturer producing quality lines for the travel, resort, tourist, and jewelry industries.",
  keywords: "jewelry, black hills gold, rings, bracelets, gold, jewelry manufacturer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
