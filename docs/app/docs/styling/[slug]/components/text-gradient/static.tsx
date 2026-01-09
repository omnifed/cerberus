import { cerberus } from '@cerberus-design/react'
import { css } from 'styled-system/css'

export default function TextGradientPreview() {
  return (
    <cerberus.div display="flex" flexDirection="column" gap="4" padding="6">
      <cerberus.h3
        textStyle="h3"
        textGradient="to-b"
        gradientFrom="gradient.charon-dark.start"
        gradientTo="gradient.charon-dark.end"
      >
        Charon Dark Gradient
      </cerberus.h3>

      <p
        className={css({
          textStyle: 'body-lg',
          textGradient: 'to-b',
          gradientFrom: 'gradient.charon-light.start',
          gradientTo: 'gradient.charon-light.end',
        })}
      >
        This text uses the Charon light gradient variant.
      </p>

      <p
        className={css({
          textStyle: 'heading-md',
          textGradient: 'to-b',
          gradientFrom: 'gradient.nyx-dark.start',
          gradientTo: 'gradient.nyx-dark.end',
        })}
      >
        Nyx dark gradient creates a striking effect.
      </p>

      <p
        className={css({
          textStyle: 'body-lg',
          textGradient: 'to-b',
          gradientFrom: 'gradient.amphiaraus-light.start',
          gradientTo: 'gradient.amphiaraus-light.end',
        })}
      >
        Amphiaraus light gradient for subtle elegance.
      </p>
    </cerberus.div>
  )
}
