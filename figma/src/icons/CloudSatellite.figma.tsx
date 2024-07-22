import figma from '@figma/code-connect'
import { CloudSatellite } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudSatellite,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1224',

  {
    imports: ["import { CloudSatellite } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudSatellite size={props.size} />,
  },
)
