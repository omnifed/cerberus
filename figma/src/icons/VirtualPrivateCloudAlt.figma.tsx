import figma from '@figma/code-connect'
import { VirtualPrivateCloudAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VirtualPrivateCloudAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-3',

  {
    imports: ["import { VirtualPrivateCloudAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VirtualPrivateCloudAlt size={props.size} />,
  },
)
