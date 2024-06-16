import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust - Get trusted local taskers",
  description: "trusted workers online ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Link href={"/auth"}>Index</Link>
        </body>
    </html>
  );
}
