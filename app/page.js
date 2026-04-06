import Ticker from '@/components/Ticker'
import Navigation from '@/components/Navigation'
import HeroFrontPage from '@/components/HeroFrontPage'
import ArticleProducts from '@/components/ArticleProducts'
import BreakingDrop from '@/components/BreakingDrop'
import LookbookStreet from '@/components/LookbookStreet'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const products = [
  {
    id: 1,
    headline: 'The Overcoat Report',
    category: 'OUTERWEAR',
    name: 'Raw Edge Overcoat',
    price: '€ 485',
    description: 'Unfinished hems. Deliberate weight. A coat that refuses to apologize for the space it takes.',
    image: 'https://picsum.photos/seed/mc-p1/600/750',
    alt: 'Raw edge overcoat — off-white heavy canvas',
    column: 'FASHION',
  },
  {
    id: 2,
    headline: 'Form Follows Feeling',
    category: 'READY TO WEAR',
    name: 'Draped Column Dress',
    price: '€ 320',
    description: 'A study in gravity. Silk that moves like language — slowly, with intention.',
    image: 'https://picsum.photos/seed/mc-p2/600/750',
    alt: 'Draped column dress — ivory silk',
    column: 'STYLE',
  },
  {
    id: 3,
    headline: 'The New Uniform',
    category: 'TAILORING',
    name: 'Deconstructed Blazer',
    price: '€ 395',
    description: 'Three seams removed. Zero compromises. The anti-blazer blazer.',
    image: 'https://picsum.photos/seed/mc-p3/600/750',
    alt: 'Deconstructed blazer — charcoal',
    column: 'TAILORING',
  },
  {
    id: 4,
    headline: 'On the Street: Trousers',
    category: 'BOTTOMS',
    name: 'Wide Leg Trouser',
    price: '€ 245',
    description: 'Linen that creases like a map. Each fold tells a story of where you have been.',
    image: 'https://picsum.photos/seed/mc-p4/600/750',
    alt: 'Wide leg trouser — natural linen',
    column: 'STREET',
  },
]

const lookbookItems = [
  { id: 1, image: 'https://picsum.photos/seed/mc-lk1/700/900', caption: 'Look 01 — Overcoat & Wide Leg' },
  { id: 2, image: 'https://picsum.photos/seed/mc-lk2/700/900', caption: 'Look 02 — Draped Dress' },
  { id: 3, image: 'https://picsum.photos/seed/mc-lk3/700/900', caption: 'Look 03 — Blazer & Trouser' },
  { id: 4, image: 'https://picsum.photos/seed/mc-lk4/700/900', caption: 'Look 04 — Street Edit' },
  { id: 5, image: 'https://picsum.photos/seed/mc-lk5/700/900', caption: 'Look 05 — After Hours' },
  { id: 6, image: 'https://picsum.photos/seed/mc-lk6/700/900', caption: 'Look 06 — Layered' },
]

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Ticker />
      <Navigation />
      <main>
        <HeroFrontPage />
        <ArticleProducts products={products} />
        <BreakingDrop />
        <LookbookStreet items={lookbookItems} />
      </main>
      <Footer />
    </>
  )
}
