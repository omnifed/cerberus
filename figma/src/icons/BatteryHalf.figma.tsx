import figma from '@figma/code-connect'
import { BatteryHalf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BatteryHalf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-293',

  {
    imports: ["import { BatteryHalf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BatteryHalf size={props.size} />,
  },
)
