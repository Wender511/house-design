import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import { Nav } from '@/components';

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
      <body className={`${montserrat.variable} relative`}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
