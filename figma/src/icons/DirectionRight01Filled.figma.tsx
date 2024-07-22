import figma from '@figma/code-connect'
import { DirectionRight01Filled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionRight01Filled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1822',

  {
    imports: ["import { DirectionRight01Filled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionRight01Filled size={props.size} />,
  },
)
