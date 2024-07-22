import figma from '@figma/code-connect'
import { PhoneIncomingFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneIncomingFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36533',

  {
    imports: ["import { PhoneIncomingFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneIncomingFilled size={props.size} />,
  },
)
