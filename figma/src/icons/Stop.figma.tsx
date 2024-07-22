import figma from '@figma/code-connect'
import { Stop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Stop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35229',

  {
    imports: ["import { Stop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Stop size={props.size} />,
  },
)
