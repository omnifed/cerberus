import figma from '@figma/code-connect'
import { PhoneOffFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneOffFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-2',

  {
    imports: ["import { PhoneOffFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneOffFilled size={props.size} />,
  },
)
