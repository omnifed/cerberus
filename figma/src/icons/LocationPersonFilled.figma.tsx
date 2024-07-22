import figma from '@figma/code-connect'
import { LocationPersonFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LocationPersonFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1126',

  {
    imports: ["import { LocationPersonFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LocationPersonFilled size={props.size} />,
  },
)
