import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../components/header'
import image from './image.png'

const inter = Inter({ subsets: ["latin"] });

interface ExtendedMetadata extends Metadata {
  image: string
}

export const metadata: ExtendedMetadata = {
  title: "Dino Lab",
  description: "Diseño e Impresión en 3D",
  image: image.toString()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
