import figma from '@figma/code-connect'
import { DiamondFill } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DiamondFill,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-268',

  {
    imports: ["import { DiamondFill } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DiamondFill size={props.size} />,
  },
)
