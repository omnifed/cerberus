import figma from '@figma/code-connect'
import { DroneDelivery } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DroneDelivery,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-703',

  {
    imports: ["import { DroneDelivery } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DroneDelivery size={props.size} />,
  },
)
