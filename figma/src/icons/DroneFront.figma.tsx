import figma from '@figma/code-connect'
import { DroneFront } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DroneFront,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-706',

  {
    imports: ["import { DroneFront } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DroneFront size={props.size} />,
  },
)
