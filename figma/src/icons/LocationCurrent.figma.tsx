import figma from '@figma/code-connect'
import { LocationCurrent } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LocationCurrent,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-26',

  {
    imports: ["import { LocationCurrent } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LocationCurrent size={props.size} />,
  },
)
