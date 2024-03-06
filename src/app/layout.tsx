import type { Metadata } from 'next'
import './globals.css'

import ClientLayout from '../components/layout/client-layout'

export const metadata: Metadata = {
  title: 'Dino Lab | Diseño e impresión en 3D',
  description: 'Diseño e Impresión en 3D'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}
