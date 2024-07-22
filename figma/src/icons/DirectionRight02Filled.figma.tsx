import figma from '@figma/code-connect'
import { DirectionRight02Filled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionRight02Filled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1816',

  {
    imports: ["import { DirectionRight02Filled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionRight02Filled size={props.size} />,
  },
)
