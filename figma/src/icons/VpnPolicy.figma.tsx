import figma from '@figma/code-connect'
import { VpnPolicy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VpnPolicy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-32',

  {
    imports: ["import { VpnPolicy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VpnPolicy size={props.size} />,
  },
)
