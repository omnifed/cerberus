import figma from '@figma/code-connect'
import { Drone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Drone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-700',

  {
    imports: ["import { Drone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Drone size={props.size} />,
  },
)
