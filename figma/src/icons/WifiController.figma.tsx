import figma from '@figma/code-connect'
import { WifiController } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WifiController,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-144',

  {
    imports: ["import { WifiController } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WifiController size={props.size} />,
  },
)
