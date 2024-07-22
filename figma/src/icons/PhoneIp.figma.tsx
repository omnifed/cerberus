import figma from '@figma/code-connect'
import { PhoneIp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneIp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-68',

  {
    imports: ["import { PhoneIp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneIp size={props.size} />,
  },
)
