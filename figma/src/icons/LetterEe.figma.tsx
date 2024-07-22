import figma from '@figma/code-connect'
import { LetterEe } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterEe,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-879',

  {
    imports: ["import { LetterEe } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterEe size={props.size} />,
  },
)
