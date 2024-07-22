import figma from '@figma/code-connect'
import { WatsonHealthCobbAngle } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthCobbAngle,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-57',

  {
    imports: ["import { WatsonHealthCobbAngle } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthCobbAngle size={props.size} />,
  },
)
