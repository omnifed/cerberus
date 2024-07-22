import figma from '@figma/code-connect'
import { BluetoothOff } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BluetoothOff,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-308',

  {
    imports: ["import { BluetoothOff } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BluetoothOff size={props.size} />,
  },
)
