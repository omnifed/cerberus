import figma from '@figma/code-connect'
import { DirectionLoopRightFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionLoopRightFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1834',

  {
    imports: ["import { DirectionLoopRightFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionLoopRightFilled size={props.size} />,
  },
)
