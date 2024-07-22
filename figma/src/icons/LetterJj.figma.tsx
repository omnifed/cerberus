import figma from '@figma/code-connect'
import { LetterJj } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterJj,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-916',

  {
    imports: ["import { LetterJj } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterJj size={props.size} />,
  },
)
