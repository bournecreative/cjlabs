import type { Metadata } from "next";
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400'})

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
      <body className={anton.className}>
        {children}
      </body>
    </html>
  );
}
