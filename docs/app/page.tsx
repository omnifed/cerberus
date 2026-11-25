import { Descent } from '@/components/descent'
import { HomeClose } from '@/components/home-close'
import { HomeHero } from '@/components/home-hero'
import { SceneMatcher } from '@/components/scenes/scene-matcher'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <HomeHero />
      <Descent />
      <HomeClose />
      <SiteFooter />

      <SceneMatcher />
    </>
  )
}
