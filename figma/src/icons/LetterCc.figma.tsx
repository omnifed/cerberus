import figma from '@figma/code-connect'
import { LetterCc } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterCc,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-861',

  {
    imports: ["import { LetterCc } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterCc size={props.size} />,
  },
)
