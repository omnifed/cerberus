import figma from '@figma/code-connect'
import { Subtract } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Subtract,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4171',

  {
    imports: ["import { Subtract } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Subtract size={props.size} />,
  },
)
