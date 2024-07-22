import figma from '@figma/code-connect'
import { MicrophoneFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MicrophoneFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36491',

  {
    imports: ["import { MicrophoneFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MicrophoneFilled size={props.size} />,
  },
)
