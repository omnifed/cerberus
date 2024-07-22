import figma from '@figma/code-connect'
import { ConnectRecursive } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectRecursive,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1122',

  {
    imports: ["import { ConnectRecursive } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectRecursive size={props.size} />,
  },
)
