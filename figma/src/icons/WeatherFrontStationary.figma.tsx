import figma from '@figma/code-connect'
import { WeatherFrontStationary } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WeatherFrontStationary,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9385-1739',

  {
    imports: ["import { WeatherFrontStationary } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WeatherFrontStationary size={props.size} />,
  },
)
