import { css } from '@cerberus-design/styled-system/css'
import HomeHero from './components/home-hero'

export default function Home() {
  return (
    <div
      className={css({
        mt: '9rem',
      })}
    >
      <HomeHero />
    </div>
  )
}
