import figma from '@figma/code-connect'
import { Network4Reference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Network4Reference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1013',

  {
    imports: ["import { Network4Reference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Network4Reference size={props.size} />,
  },
)
