import figma from '@figma/code-connect'
import { MacShift } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MacShift,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-145',

  {
    imports: ["import { MacShift } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MacShift size={props.size} />,
  },
)
