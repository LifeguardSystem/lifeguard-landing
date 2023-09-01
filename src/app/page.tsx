import About from '@/components/organisms/about/about'
import OpenAi from '@/components/organisms/ai/ai'
import Banner from '@/components/organisms/banner/banner'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Hero from '@/components/organisms/hero/hero'
import HowTo from '@/components/organisms/how-to/how-to'
import Plugins from '@/components/organisms/plugins/plugins'

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
