import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'joyus',
  description: 'joyus a new platform to make social event easier!',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
