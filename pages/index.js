import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

export default function Home() {
  const subtitle = 'アウトプットしていくサイト'

  return (
  <>
  <Header />
  <main>
    <Hero />
  </main>
    <Footer />
  </>
  )
}

