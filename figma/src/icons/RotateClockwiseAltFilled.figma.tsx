import figma from '@figma/code-connect'
import { RotateClockwiseAltFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RotateClockwiseAltFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-353',

  {
    imports: ["import { RotateClockwiseAltFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RotateClockwiseAltFilled size={props.size} />,
  },
)
