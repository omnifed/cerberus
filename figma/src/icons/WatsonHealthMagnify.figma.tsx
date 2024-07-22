import figma from '@figma/code-connect'
import { WatsonHealthMagnify } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthMagnify,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-147',

  {
    imports: ["import { WatsonHealthMagnify } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthMagnify size={props.size} />,
  },
)
