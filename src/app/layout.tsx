import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Layout from '@/components/Layout/Layout';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: 'Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} relative`}>{children}</body>
    </html>
  );
}
