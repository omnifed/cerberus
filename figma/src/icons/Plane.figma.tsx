import figma from '@figma/code-connect'
import { Plane } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Plane,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1027',

  {
    imports: ["import { Plane } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Plane size={props.size} />,
  },
)
