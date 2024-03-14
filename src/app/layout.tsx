import type { Metadata } from "next";
import { Anton, Roboto } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400'})
const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-roboto'})

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
      <body className={`${anton.className} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
