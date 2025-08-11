import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically
import { Playfair_Display, Lato } from 'next/font/google';

// Configure the new fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap', // optimize font loading
  variable: '--font-playfair', // CSS variable for easier application
});

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '700'], // Specify weights to load
});

export const metadata: Metadata = {
  title: 'LUXE Realty | Premium Property Portal',
  description: 'Discover extraordinary homes with LUXE Realty - where luxury meets lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body
        className="antialiased"
      >
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
