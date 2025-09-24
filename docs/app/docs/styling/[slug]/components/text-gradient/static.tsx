import { cerberus } from '@cerberus-design/react'
import { css } from 'styled-system/css'

export default function TextGradientPreview() {
  return (
    <cerberus.div display="flex" flexDirection="column" gap="4" padding="6">
      <cerberus.h3
        textStyle="h3"
        css={{
          textGradient: 'cerberus.dark.charon-dark',
        }}
      >
        Charon Dark Gradient (using css prop)
      </cerberus.h3>

      <cerberus.div
        textStyle="body-lg"
        className={css({
          textGradient: 'cerberus.light.charon-light',
        })}
      >
        This text uses the Charon light gradient variant (using className).
      </cerberus.div>

      <cerberus.span
        textStyle="body-lg"
        css={{
          textGradient: 'cerberus.dark.nyx-dark',
        }}
      >
        Nyx dark gradient creates a striking effect (using css prop).
      </cerberus.span>

      <cerberus.span
        textStyle="body-lg"
        className={css({
          textGradient: 'cerberus.light.amphiaraus-light',
        })}
      >
        Amphiaraus light gradient for subtle elegance (using className).
      </cerberus.span>
    </cerberus.div>
  )
}
