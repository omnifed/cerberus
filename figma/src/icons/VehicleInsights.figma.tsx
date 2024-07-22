import figma from '@figma/code-connect'
import { VehicleInsights } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VehicleInsights,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-8',

  {
    imports: ["import { VehicleInsights } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VehicleInsights size={props.size} />,
  },
)
