import figma from '@figma/code-connect'
import { LocationStar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LocationStar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1123',

  {
    imports: ["import { LocationStar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LocationStar size={props.size} />,
  },
)
