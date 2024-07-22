import figma from '@figma/code-connect'
import { ConnectionSignal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectionSignal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-673',

  {
    imports: ["import { ConnectionSignal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectionSignal size={props.size} />,
  },
)
