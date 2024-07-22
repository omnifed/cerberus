import figma from '@figma/code-connect'
import { LetterAa } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterAa,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-843',

  {
    imports: ["import { LetterAa } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterAa size={props.size} />,
  },
)
