import { VStack } from '@/styled-system/jsx'
import HomeHero from './components/home-hero'
import { Scene } from './scene'
import { cacheLife } from 'next/cache'

export default async function Home() {
  'use cache'
  cacheLife('hours')

  return (
    <>
      <VStack gap="0" minH="100dvh" h="full" justify="center">
        <HomeHero />
      </VStack>

      <Scene />
    </>
  )
}
