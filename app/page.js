import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import UspBar from '@/components/UspBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandStatement from '@/components/BrandStatement'
import Footer from '@/components/Footer'

// ── Product data (replace with Shopify API calls later) ──────────────
const allProducts = [
  { id: 1,  name: 'Raw Edge Overcoat',      price: '€ 485', image: 'https://picsum.photos/seed/mc-p1/600/750', alt: 'Raw Edge Overcoat — natural canvas' },
  { id: 2,  name: 'Draped Column Dress',    price: '€ 320', image: 'https://picsum.photos/seed/mc-p2/600/750', alt: 'Draped Column Dress — ivory silk' },
  { id: 3,  name: 'Deconstructed Blazer',   price: '€ 395', image: 'https://picsum.photos/seed/mc-p3/600/750', alt: 'Deconstructed Blazer — charcoal' },
  { id: 4,  name: 'Wide Leg Trouser',       price: '€ 245', image: 'https://picsum.photos/seed/mc-p4/600/750', alt: 'Wide Leg Trouser — natural linen' },
  { id: 5,  name: 'Silk Blouse',            price: '€ 195', image: 'https://picsum.photos/seed/mc-p5/600/750', alt: 'Silk Blouse — soft ivory' },
  { id: 6,  name: 'Column Skirt',           price: '€ 215', image: 'https://picsum.photos/seed/mc-p6/600/750', alt: 'Column Skirt — black crepe' },
  { id: 7,  name: 'Linen Shirt',            price: '€ 165', image: 'https://picsum.photos/seed/mc-p7/600/750', alt: 'Linen Shirt — off-white' },
  { id: 8,  name: 'Tailored Short',         price: '€ 175', image: 'https://picsum.photos/seed/mc-p8/600/750', alt: 'Tailored Short — dark grey' },
]

const featured = allProducts.slice(0, 4)

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductGrid products={allProducts} />
        <UspBar />
        <FeaturedProducts products={featured} />
        <BrandStatement />
      </main>
      <Footer />
    </>
  )
}
