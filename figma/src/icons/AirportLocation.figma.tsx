import figma from '@figma/code-connect'
import { AirportLocation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AirportLocation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-3247',

  {
    imports: ["import { AirportLocation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AirportLocation size={props.size} />,
  },
)
