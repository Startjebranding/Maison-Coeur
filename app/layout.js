import { Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'Maison Cœur — Luxury Fashion',
  description: 'Maison Cœur is an ode to silence, to restraint, to the poetry hidden in the everyday.',
  openGraph: {
    title: 'Maison Cœur',
    description: 'An ode to silence and restraint.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  )
}
