import { cerberus } from '@cerberus-design/react'
import { css } from 'styled-system/css'

export default function TextGradientPreview() {
  return (
    <cerberus.div display="flex" flexDirection="column" gap="4" padding="6">
      <cerberus.h3
        textStyle="h3"
        className={css({
          textGradient: 'cerberus.dark.charon-dark',
        })}
      >
        Charon Dark Gradient
      </cerberus.h3>

      <cerberus.div
        textStyle="body-lg"
        className={css({
          textGradient: 'cerberus.light.charon-light',
        })}
      >
        This text uses the Charon light gradient variant.
      </cerberus.div>

      <cerberus.span
        textStyle="body-lg"
        className={css({
          textGradient: 'cerberus.dark.nyx-dark',
        })}
      >
        Nyx dark gradient creates a striking effect.
      </cerberus.span>

      <cerberus.span
        textStyle="body-lg"
        className={css({
          textGradient: 'cerberus.light.amphiaraus-light',
        })}
      >
        Amphiaraus light gradient for subtle elegance.
      </cerberus.span>
    </cerberus.div>
  )
}
