import figma from '@figma/code-connect'
import { HybridNetworking } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HybridNetworking,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-950',

  {
    imports: ["import { HybridNetworking } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HybridNetworking size={props.size} />,
  },
)
