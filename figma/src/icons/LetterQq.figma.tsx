import figma from '@figma/code-connect'
import { LetterQq } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterQq,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-951',

  {
    imports: ["import { LetterQq } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterQq size={props.size} />,
  },
)
