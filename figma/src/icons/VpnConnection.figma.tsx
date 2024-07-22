import figma from '@figma/code-connect'
import { VpnConnection } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VpnConnection,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-29',

  {
    imports: ["import { VpnConnection } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VpnConnection size={props.size} />,
  },
)
