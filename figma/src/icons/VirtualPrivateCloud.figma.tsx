import figma from '@figma/code-connect'
import { VirtualPrivateCloud } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VirtualPrivateCloud,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1173',

  {
    imports: ["import { VirtualPrivateCloud } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VirtualPrivateCloud size={props.size} />,
  },
)
