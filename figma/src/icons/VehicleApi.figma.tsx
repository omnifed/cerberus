import figma from '@figma/code-connect'
import { VehicleApi } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VehicleApi,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-2',

  {
    imports: ["import { VehicleApi } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VehicleApi size={props.size} />,
  },
)
