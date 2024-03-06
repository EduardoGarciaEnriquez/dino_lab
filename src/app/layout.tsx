import type { Metadata } from 'next'
import './globals.css'
import { Suspense } from 'react'

import ClientLayout from './client-layout'

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
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
    </html>
  )
}
