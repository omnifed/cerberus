import figma from '@figma/code-connect'
import { TextNewLine } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextNewLine,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-20',

  {
    imports: ["import { TextNewLine } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextNewLine size={props.size} />,
  },
)
