import NoticeBar from '@/components/molecules/notice-bar'
import About from '@/components/organisms/about/about'
import OpenAi from '@/components/organisms/ai/ai'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/molecules/header'
import Hero from '@/components/organisms/hero/hero'
import HowTo from '@/components/organisms/how-to/how-to'
import Plugins from '@/components/organisms/plugins/plugins'

export default function Home() {
  return (
    <main className='relative'>

      <NoticeBar text='Read now' link='https://github.com/LifeguardSystem/lifeguard'>
        Added a new <strong>hot reload</strong> feature 🔥
      </NoticeBar>
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
