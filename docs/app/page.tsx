import { VStack } from '@/styled-system/jsx'
import { HomeHero } from '@/components/home-hero'
import { SceneMatcher } from '@/components/scenes/scene-matcher'

export default function Home() {
  return (
    <>
      <VStack gap="0" minH="100dvh" h="full" justify="center">
        <HomeHero />
      </VStack>

      <SceneMatcher />
    </>
  )
}
