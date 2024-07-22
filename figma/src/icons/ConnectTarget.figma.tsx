import figma from '@figma/code-connect'
import { ConnectTarget } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectTarget,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1124',

  {
    imports: ["import { ConnectTarget } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectTarget size={props.size} />,
  },
)
