import figma from '@figma/code-connect'
import { BatteryLow } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BatteryLow,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-296',

  {
    imports: ["import { BatteryLow } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BatteryLow size={props.size} />,
  },
)
