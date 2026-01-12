import { css } from 'styled-system/css'

export function HomeHeroText() {
  return (
    <span
      className={css({
        display: 'block',
        textGradient: 'to-t',
        gradientFrom: 'gradient.charon-dark.start',
        gradientTo: 'gradient.charon-dark.end',
      })}
    >
      with Cerberus
    </span>
  )
}
