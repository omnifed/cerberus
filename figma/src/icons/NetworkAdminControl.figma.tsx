import figma from '@figma/code-connect'
import { NetworkAdminControl } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NetworkAdminControl,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-293',

  {
    imports: ["import { NetworkAdminControl } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NetworkAdminControl size={props.size} />,
  },
)
