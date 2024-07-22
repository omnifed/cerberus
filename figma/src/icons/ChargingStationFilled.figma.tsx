import figma from '@figma/code-connect'
import { ChargingStationFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChargingStationFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-2087',

  {
    imports: ["import { ChargingStationFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChargingStationFilled size={props.size} />,
  },
)
