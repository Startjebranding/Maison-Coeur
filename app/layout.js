import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata = {
  title: 'Maison Cœur — Refined quality. Honest pricing.',
  description: 'Designed with intention. Built for everyday wear. Priced without the luxury markup.',
  openGraph: {
    title: 'Maison Cœur',
    description: 'Refined quality. Honest pricing.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
