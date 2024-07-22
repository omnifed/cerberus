import figma from '@figma/code-connect'
import { LetterHh } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterHh,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-900',

  {
    imports: ["import { LetterHh } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterHh size={props.size} />,
  },
)
