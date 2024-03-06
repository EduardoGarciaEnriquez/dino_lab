'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Inter } from 'next/font/google'

import NavigationBar from '@/components/navigation-bar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const theme = searchParams.get('theme') ?? 'dark'
  return (
    <body className={`${inter.className} ${theme}`}>
      <NavigationBar />
      {children}
      <Footer />
    </body>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Layout>{children}</Layout>
    </Suspense>
  )
}
