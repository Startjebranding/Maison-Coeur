import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import DropStrip from '@/components/DropStrip'
import Footer from '@/components/Footer'

const products = [
  { id: 1, name: 'Raw Edge Overcoat',    price: '€ 485', image: 'https://picsum.photos/seed/mc-sw1/600/750', alt: 'Raw Edge Overcoat', tag: null },
  { id: 2, name: 'Draped Column Dress',  price: '€ 320', image: 'https://picsum.photos/seed/mc-sw2/600/750', alt: 'Draped Column Dress', tag: 'new' },
  { id: 3, name: 'Deconstructed Blazer', price: '€ 395', image: 'https://picsum.photos/seed/mc-sw3/600/750', alt: 'Deconstructed Blazer', tag: 'limited' },
  { id: 4, name: 'Wide Leg Trouser',     price: '€ 245', image: 'https://picsum.photos/seed/mc-sw4/600/750', alt: 'Wide Leg Trouser', tag: 'new' },
  { id: 5, name: 'Silk Blouse',          price: '€ 195', image: 'https://picsum.photos/seed/mc-sw5/600/750', alt: 'Silk Blouse', tag: null },
  { id: 6, name: 'Column Skirt',         price: '€ 215', image: 'https://picsum.photos/seed/mc-sw6/600/750', alt: 'Column Skirt', tag: 'limited' },
  { id: 7, name: 'Linen Shirt',          price: '€ 165', image: 'https://picsum.photos/seed/mc-sw7/600/750', alt: 'Linen Shirt', tag: null },
  { id: 8, name: 'Tailored Short',       price: '€ 175', image: 'https://picsum.photos/seed/mc-sw8/600/750', alt: 'Tailored Short', tag: 'new' },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductGrid products={products} />
        <DropStrip />
      </main>
      <Footer />
    </>
  )
}
