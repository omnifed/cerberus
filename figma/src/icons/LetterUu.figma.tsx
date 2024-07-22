import figma from '@figma/code-connect'
import { LetterUu } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterUu,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-963',

  {
    imports: ["import { LetterUu } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterUu size={props.size} />,
  },
)
