'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Inter } from 'next/font/google'

import NavigationBar from '@/components/navigation-bar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

function ClientLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const theme = searchParams.get('theme')

  return (
    <body className={`${inter.className} ${theme ?? 'dark'}`}>
      <NavigationBar />
      {children}
      <Footer />
    </body>
  )
}

export default ClientLayout
