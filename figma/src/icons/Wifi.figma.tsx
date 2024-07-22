import figma from '@figma/code-connect'
import { Wifi } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Wifi,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-141',

  {
    imports: ["import { Wifi } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Wifi size={props.size} />,
  },
)
