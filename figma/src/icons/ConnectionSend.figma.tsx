import figma from '@figma/code-connect'
import { ConnectionSend } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectionSend,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-667',

  {
    imports: ["import { ConnectionSend } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectionSend size={props.size} />,
  },
)
