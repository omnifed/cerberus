import figma from '@figma/code-connect'
import { RadarWeather } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RadarWeather,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-765',

  {
    imports: ["import { RadarWeather } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RadarWeather size={props.size} />,
  },
)
