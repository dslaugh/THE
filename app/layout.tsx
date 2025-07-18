import type { Metadata } from 'next';
import { Orbitron, Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: '--font-orbritron',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Texas Hold-em Extravaganza',
  description: 'A Texas Hold-em tournament timer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-roboto antialiased flex items-center justify-center min-h-screen p-4">
        {children}
      </body>
    </html>
  );
}
