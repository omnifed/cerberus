import figma from '@figma/code-connect'
import { LocationStarFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LocationStarFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1120',

  {
    imports: ["import { LocationStarFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LocationStarFilled size={props.size} />,
  },
)
