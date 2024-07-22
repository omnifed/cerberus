import figma from '@figma/code-connect'
import { GatewayVpn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GatewayVpn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-182',

  {
    imports: ["import { GatewayVpn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GatewayVpn size={props.size} />,
  },
)
