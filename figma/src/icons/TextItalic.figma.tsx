import figma from '@figma/code-connect'
import { TextItalic } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextItalic,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-8',

  {
    imports: ["import { TextItalic } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextItalic size={props.size} />,
  },
)
