import figma from '@figma/code-connect'
import { RotateCounterclockwise } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RotateCounterclockwise,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-359',

  {
    imports: ["import { RotateCounterclockwise } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RotateCounterclockwise size={props.size} />,
  },
)
