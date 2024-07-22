import figma from '@figma/code-connect'
import { LetterKk } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterKk,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-927',

  {
    imports: ["import { LetterKk } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterKk size={props.size} />,
  },
)
