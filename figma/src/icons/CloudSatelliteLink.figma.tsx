import figma from '@figma/code-connect'
import { CloudSatelliteLink } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudSatelliteLink,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1230',

  {
    imports: ["import { CloudSatelliteLink } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudSatelliteLink size={props.size} />,
  },
)
