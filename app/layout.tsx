import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cobrix - AI Headhunting from Trusted Networks',
  description: 'Find the right candidate before anyone else does. AI-powered headhunting platform that maps your network connections.',
  keywords: 'AI headhunting, recruitment, hiring, LinkedIn, network mapping, candidate sourcing',
  authors: [{ name: 'Cobrix' }],
  openGraph: {
    title: 'Cobrix - AI Headhunting from Trusted Networks',
    description: 'Find the right candidate before anyone else does. AI-powered headhunting platform that maps your network connections.',
    type: 'website',
    url: 'https://projectcobrix.com',
    siteName: 'Cobrix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobrix - AI Headhunting from Trusted Networks',
    description: 'Find the right candidate before anyone else does. AI-powered headhunting platform that maps your network connections.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 