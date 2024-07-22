import figma from '@figma/code-connect'
import { KeyboardOff } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  KeyboardOff,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-20',

  {
    imports: ["import { KeyboardOff } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <KeyboardOff size={props.size} />,
  },
)
