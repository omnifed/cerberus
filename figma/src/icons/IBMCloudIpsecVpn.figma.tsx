import figma from '@figma/code-connect'
import { IBMCloudIpsecVpn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudIpsecVpn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-154',

  {
    imports: ["import { IBMCloudIpsecVpn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudIpsecVpn size={props.size} />,
  },
)
