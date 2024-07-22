import figma from '@figma/code-connect'
import { ConnectionReceive } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectionReceive,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-664',

  {
    imports: ["import { ConnectionReceive } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectionReceive size={props.size} />,
  },
)
