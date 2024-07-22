import figma from '@figma/code-connect'
import { LetterIi } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterIi,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-907',

  {
    imports: ["import { LetterIi } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterIi size={props.size} />,
  },
)
