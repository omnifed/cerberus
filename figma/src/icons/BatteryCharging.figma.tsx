import figma from '@figma/code-connect'
import { BatteryCharging } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BatteryCharging,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-284',

  {
    imports: ["import { BatteryCharging } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BatteryCharging size={props.size} />,
  },
)
