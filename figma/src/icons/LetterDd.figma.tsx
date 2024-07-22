import figma from '@figma/code-connect'
import { LetterDd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterDd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-868',

  {
    imports: ["import { LetterDd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterDd size={props.size} />,
  },
)
