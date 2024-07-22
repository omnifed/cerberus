import figma from '@figma/code-connect'
import { PhoneVoiceFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneVoiceFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-17',

  {
    imports: ["import { PhoneVoiceFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneVoiceFilled size={props.size} />,
  },
)
