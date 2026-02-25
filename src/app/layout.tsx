import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Models & Coding Paradigms',
  description: 'A beautiful presentation about Antigravity, Gemini 3.1, and the future of AI IDEs.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
