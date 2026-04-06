import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import EditorialSection from '@/components/EditorialSection'
import FeaturedCollection from '@/components/FeaturedCollection'
import LookbookStrip from '@/components/LookbookStrip'
import BrandStatement from '@/components/BrandStatement'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const editorialData = [
  {
    id: 1,
    title: 'The Essence of Silence',
    subtitle: 'Spring / Summer 2025',
    body: 'There is a language spoken only in stillness. In the curve of a collar, the fall of a hem. Maison Cœur finds meaning in what is left unsaid — a garment that breathes with the one who wears it.',
    image: 'https://picsum.photos/seed/mc-editorial-1/900/1100',
    imageAlt: 'Editorial — white linen draped figure in soft morning light',
    reverse: false,
  },
  {
    id: 2,
    title: 'A Study in Form',
    subtitle: 'Materials & Craft',
    body: 'Every seam is a sentence. Every pleat, a pause. We work with fabrics that carry memory — natural, honest, worn with intention. The body becomes a canvas for quiet architecture.',
    image: 'https://picsum.photos/seed/mc-editorial-2/900/1100',
    imageAlt: 'Editorial — fabric texture close-up, structured tailoring detail',
    reverse: true,
  },
  {
    id: 3,
    title: 'Between Light and Shadow',
    subtitle: 'Lookbook No. 3',
    body: 'Contrast is not conflict. It is composition. Where darkness meets pale linen, where structure yields to movement — this is where Maison Cœur lives.',
    image: 'https://picsum.photos/seed/mc-editorial-3/900/1100',
    imageAlt: 'Editorial — model in high-contrast black and white environment',
    reverse: false,
  },
  {
    id: 4,
    title: 'The Language of Fabric',
    subtitle: 'Atelier Notes',
    body: 'We do not chase trends. We listen to cloth. Each collection begins with a single question: what does this want to become? The answer takes a season.',
    image: 'https://picsum.photos/seed/mc-editorial-4/900/1100',
    imageAlt: 'Editorial — atelier scene with draped fabric and natural light',
    reverse: true,
  },
]

const collectionData = [
  {
    id: 1,
    name: 'Linnen Overcoat',
    price: '€ 485',
    image: 'https://picsum.photos/seed/mc-col-1/700/900',
    alt: 'Maison Cœur linnen overcoat — oversized, natural white',
  },
  {
    id: 2,
    name: 'Draped Midi Dress',
    price: '€ 320',
    image: 'https://picsum.photos/seed/mc-col-2/700/900',
    alt: 'Maison Cœur draped midi dress — silk, ivory',
  },
  {
    id: 3,
    name: 'Structured Blazer',
    price: '€ 395',
    image: 'https://picsum.photos/seed/mc-col-3/700/900',
    alt: 'Maison Cœur structured blazer — charcoal wool',
  },
  {
    id: 4,
    name: 'Wide Leg Trousers',
    price: '€ 245',
    image: 'https://picsum.photos/seed/mc-col-4/700/900',
    alt: 'Maison Cœur wide leg trousers — off-white linen',
  },
  {
    id: 5,
    name: 'Silk Blouse',
    price: '€ 195',
    image: 'https://picsum.photos/seed/mc-col-5/700/900',
    alt: 'Maison Cœur silk blouse — minimal, soft drape',
  },
  {
    id: 6,
    name: 'Column Skirt',
    price: '€ 215',
    image: 'https://picsum.photos/seed/mc-col-6/700/900',
    alt: 'Maison Cœur column skirt — crepe, black',
  },
]

const lookbookData = [
  { id: 1, image: 'https://picsum.photos/seed/mc-look-1/800/1000', alt: 'Lookbook — Look 01' },
  { id: 2, image: 'https://picsum.photos/seed/mc-look-2/800/1000', alt: 'Lookbook — Look 02' },
  { id: 3, image: 'https://picsum.photos/seed/mc-look-3/800/1000', alt: 'Lookbook — Look 03' },
  { id: 4, image: 'https://picsum.photos/seed/mc-look-4/800/1000', alt: 'Lookbook — Look 04' },
  { id: 5, image: 'https://picsum.photos/seed/mc-look-5/800/1000', alt: 'Lookbook — Look 05' },
  { id: 6, image: 'https://picsum.photos/seed/mc-look-6/800/1000', alt: 'Lookbook — Look 06' },
  { id: 7, image: 'https://picsum.photos/seed/mc-look-7/800/1000', alt: 'Lookbook — Look 07' },
]

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        {editorialData.map((item) => (
          <EditorialSection key={item.id} {...item} />
        ))}
        <FeaturedCollection items={collectionData} />
        <LookbookStrip items={lookbookData} />
        <BrandStatement />
      </main>
      <Footer />
    </>
  )
}
