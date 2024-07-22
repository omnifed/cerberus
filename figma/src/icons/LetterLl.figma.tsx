import figma from '@figma/code-connect'
import { LetterLl } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LetterLl,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-936',

  {
    imports: ["import { LetterLl } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LetterLl size={props.size} />,
  },
)
