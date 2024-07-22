import figma from '@figma/code-connect'
import { LetterVv } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterVv,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-966',

  {
    imports: ["import { LetterVv } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterVv size={props.size} />,
  },
)
