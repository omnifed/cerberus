import figma from '@figma/code-connect'
import { RotateClockwiseFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RotateClockwiseFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-356',

  {
    imports: ["import { RotateClockwiseFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RotateClockwiseFilled size={props.size} />,
  },
)
