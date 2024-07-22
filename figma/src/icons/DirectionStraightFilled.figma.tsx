import figma from '@figma/code-connect'
import { DirectionStraightFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionStraightFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1502',

  {
    imports: ["import { DirectionStraightFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionStraightFilled size={props.size} />,
  },
)
