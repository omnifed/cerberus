import figma from '@figma/code-connect'
import { Bluetooth } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bluetooth,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-305',

  {
    imports: ["import { Bluetooth } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bluetooth size={props.size} />,
  },
)
