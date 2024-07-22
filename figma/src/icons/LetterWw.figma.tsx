import figma from '@figma/code-connect'
import { LetterWw } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterWw,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-969',

  {
    imports: ["import { LetterWw } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterWw size={props.size} />,
  },
)
