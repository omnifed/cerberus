import { VStack } from '@/styled-system/jsx'
import { SceneMatcher } from './components/backgrounds/scene-matcher'
import HomeHero from './components/home-hero'

export default async function Home() {
  return (
    <>
      <VStack gap="0" minH="100dvh" h="full" justify="center">
        <HomeHero />
      </VStack>

      <SceneMatcher />
    </>
  )
}
