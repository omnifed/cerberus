import figma from '@figma/code-connect'
import { Microphone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Microphone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36488',

  {
    imports: ["import { Microphone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Microphone size={props.size} />,
  },
)
