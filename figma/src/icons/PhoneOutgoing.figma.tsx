import figma from '@figma/code-connect'
import { PhoneOutgoing } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneOutgoing,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-5',

  {
    imports: ["import { PhoneOutgoing } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneOutgoing size={props.size} />,
  },
)
