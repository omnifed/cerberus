import figma from '@figma/code-connect'
import { TrafficCone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrafficCone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-958',

  {
    imports: ["import { TrafficCone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrafficCone size={props.size} />,
  },
)
