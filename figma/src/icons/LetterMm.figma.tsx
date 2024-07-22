import figma from '@figma/code-connect'
import { LetterMm } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterMm,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-939',

  {
    imports: ["import { LetterMm } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterMm size={props.size} />,
  },
)
