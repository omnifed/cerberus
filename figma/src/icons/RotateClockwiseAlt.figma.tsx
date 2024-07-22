import figma from '@figma/code-connect'
import { RotateClockwiseAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RotateClockwiseAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-350',

  {
    imports: ["import { RotateClockwiseAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RotateClockwiseAlt size={props.size} />,
  },
)
