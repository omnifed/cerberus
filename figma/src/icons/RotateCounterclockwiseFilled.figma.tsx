import figma from '@figma/code-connect'
import { RotateCounterclockwiseFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RotateCounterclockwiseFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-368',

  {
    imports: ["import { RotateCounterclockwiseFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RotateCounterclockwiseFilled size={props.size} />,
  },
)
