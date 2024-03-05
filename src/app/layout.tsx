import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationBar from '../components/navigation-bar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dino Lab | Diseño e impresión en 3D",
  description: "Diseño e Impresión en 3D"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}</body>
    </html>
  );
}
