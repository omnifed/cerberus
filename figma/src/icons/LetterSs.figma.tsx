import figma from '@figma/code-connect'
import { LetterSs } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterSs,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-957',

  {
    imports: ["import { LetterSs } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterSs size={props.size} />,
  },
)
