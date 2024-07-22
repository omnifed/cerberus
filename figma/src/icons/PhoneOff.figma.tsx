import figma from '@figma/code-connect'
import { PhoneOff } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneOff,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36536',

  {
    imports: ["import { PhoneOff } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneOff size={props.size} />,
  },
)
