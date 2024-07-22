import figma from '@figma/code-connect'
import { WatsonHealthStatusPartialFail } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthStatusPartialFail,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-246',

  {
    imports: [
      "import { WatsonHealthStatusPartialFail } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthStatusPartialFail size={props.size} />,
  },
)
