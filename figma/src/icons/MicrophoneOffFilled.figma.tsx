import figma from '@figma/code-connect'
import { MicrophoneOffFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MicrophoneOffFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36497',

  {
    imports: ["import { MicrophoneOffFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MicrophoneOffFilled size={props.size} />,
  },
)
