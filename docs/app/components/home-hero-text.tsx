import { css } from '@cerberus-design/styled-system/css'

export function HomeHeroText() {
  return (
    <span
      className={css({
        display: 'block',
        _cerberusTheme: {
          textGradient: 'cerberus.dark.charon-dark',
        },
        _acheronTheme: {
          textGradient: 'acheron.dark.charon-dark',
        },
      })}
    >
      with Cerberus
    </span>
  )
}
