import figma from '@figma/code-connect'
import { NetworkOverlay } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NetworkOverlay,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-299',

  {
    imports: ["import { NetworkOverlay } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NetworkOverlay size={props.size} />,
  },
)
