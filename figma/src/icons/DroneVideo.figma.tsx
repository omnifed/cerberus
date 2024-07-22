import figma from '@figma/code-connect'
import { DroneVideo } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DroneVideo,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-709',

  {
    imports: ["import { DroneVideo } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DroneVideo size={props.size} />,
  },
)
