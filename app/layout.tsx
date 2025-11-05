import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Luma Engine - Next-Generation Game Creation',
  description: 'Create without limits. Next-generation game engine powered by performance, light, and creativity.',
  keywords: ['game engine', 'game development', 'Luma Engine', 'Nexel Games', 'game creation'],
  authors: [{ name: 'Nexel Games' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Luma Engine - Next-Generation Game Creation',
    description: 'Create without limits. Next-generation game engine powered by performance, light, and creativity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-midnight-black text-white relative">
        {/* Orange accent stripe at top */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-luma-orange via-luma-amber to-luma-orange z-50" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

