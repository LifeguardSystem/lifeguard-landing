import About from '@/components/about/about'
import OpenAi from '@/components/ai/ai'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import HowTo from '@/components/how-to/how-to'
import Plugins from '@/components/plugins/plugins'

export default function Home() {
  return (
    <main className='relative'>

      <Banner />
      <Header />
      <Hero />
      <About />
      <HowTo />
      <OpenAi />
      <Plugins />
      <Footer />

      <div className="absolute inset-0 bg-opacity-40 mix-blend-overlay pointer-events-none -z-20"
        style={{
          backgroundImage: 'url(/noise.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '120px',
        }}>
      </div>

    </main>
  )
}
