import figma from '@figma/code-connect'
import { CloudSatelliteConfig } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudSatelliteConfig,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1227',

  {
    imports: ["import { CloudSatelliteConfig } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudSatelliteConfig size={props.size} />,
  },
)
