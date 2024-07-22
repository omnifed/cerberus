import figma from '@figma/code-connect'
import { CloudSatelliteServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudSatelliteServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1233',

  {
    imports: ["import { CloudSatelliteServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudSatelliteServices size={props.size} />,
  },
)
