import figma from '@figma/code-connect'
import { PhoneVoice } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneVoice,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-14',

  {
    imports: ["import { PhoneVoice } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneVoice size={props.size} />,
  },
)
