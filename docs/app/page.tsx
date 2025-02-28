import HomeHero from './components/home-hero'
import { Scene } from './scene'
import { vstack } from '@cerberus-design/styled-system/patterns'

export default function Home() {
  return (
    <>
      <div
        className={vstack({
          gap: 0,
          h: '100dvh',
          justify: 'center',
        })}
      >
        <HomeHero />
      </div>

      <Scene />
    </>
  )
}
