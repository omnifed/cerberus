import { css } from 'styled-system/css'

export function HomeHeroText() {
  return (
    <span
      className={css({
        display: 'inline-block',
        textGradient: 'to-t',
        gradientFrom: 'gradient.charon-dark.start',
        gradientTo: 'gradient.charon-dark.end',
      })}
    >
      UI Platform
    </span>
  )
}
