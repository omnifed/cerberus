import { VStack } from '@/styled-system/jsx'
import { cacheLife } from 'next/cache'
import { SceneMatcher } from './components/backgrounds/scene-matcher'
import HomeHero from './components/home-hero'

export default async function Home() {
  'use cache'
  cacheLife('hours')

  return (
    <>
      <VStack gap="0" minH="100dvh" h="full" justify="center">
        <HomeHero />
      </VStack>

      <SceneMatcher />
    </>
  )
}
