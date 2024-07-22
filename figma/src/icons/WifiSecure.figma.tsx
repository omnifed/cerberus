import figma from '@figma/code-connect'
import { WifiSecure } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WifiSecure,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-38',

  {
    imports: ["import { WifiSecure } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WifiSecure size={props.size} />,
  },
)
