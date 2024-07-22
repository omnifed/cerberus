import figma from '@figma/code-connect'
import { LetterYy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterYy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-975',

  {
    imports: ["import { LetterYy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterYy size={props.size} />,
  },
)
