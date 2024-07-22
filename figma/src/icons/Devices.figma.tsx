import figma from '@figma/code-connect'
import { Devices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Devices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-697',

  {
    imports: ["import { Devices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Devices size={props.size} />,
  },
)
