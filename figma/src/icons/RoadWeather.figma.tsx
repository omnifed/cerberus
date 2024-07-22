import figma from '@figma/code-connect'
import { RoadWeather } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RoadWeather,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1006',

  {
    imports: ["import { RoadWeather } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RoadWeather size={props.size} />,
  },
)
