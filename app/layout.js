import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Maison Cœur — New Drop Live',
  description: 'New drop live. Limited pieces. Maison Cœur.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
