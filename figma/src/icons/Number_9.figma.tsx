import figma from '@figma/code-connect'
import { Number_9 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Number_9,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-1008',

  {
    imports: ["import { Number_9 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Number_9 size={props.size} />,
  },
)
