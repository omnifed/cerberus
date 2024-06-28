import figma from '@figma/code-connect'
import { Button } from '@cerberus-design/react'

figma.connect(
  Button,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=8637-3339&m=dev',

  {
    props: {
      palette: figma.enum('Palette', {
        action: 'action',
        danger: 'danger',
      }),
      shape: figma.enum('Shape', {
        sharp: 'sharp',
        rounded: 'rounded',
      }),
      usage: figma.enum('Usage', {
        filled: 'filled',
        outline: 'outline',
        text: 'text',
      }),
      // Figma specific
      text: figma.textContent('Action'),
    },

    example: ({ text, palette, shape, usage }) => {
      return (
        <Button palette={palette} shape={shape} usage={usage}>
          {text}
        </Button>
      )
    },
  },
)
