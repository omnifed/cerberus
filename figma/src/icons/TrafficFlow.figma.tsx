import figma from '@figma/code-connect'
import { TrafficFlow } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrafficFlow,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-970',

  {
    imports: ["import { TrafficFlow } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrafficFlow size={props.size} />,
  },
)
