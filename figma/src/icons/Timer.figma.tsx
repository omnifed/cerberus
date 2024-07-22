import figma from '@figma/code-connect'
import { Timer } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Timer,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-4',

  {
    imports: ["import { Timer } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Timer size={props.size} />,
  },
)
