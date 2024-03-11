import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from '@/components/Navigation/Navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "christianjohnlabs",
  description: "christian is finally getting around to creating a portfolio to highlight skill sets and highlight case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
