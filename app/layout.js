import { Playfair_Display, Inter, Permanent_Marker } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marker',
  display: 'swap',
})

export const metadata = {
  title: 'Maison Cœur — The Gazette',
  description: 'New drop live. Limited pieces. Maison Cœur SS25.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable} ${marker.variable}`}>
      <body>{children}</body>
    </html>
  )
}
