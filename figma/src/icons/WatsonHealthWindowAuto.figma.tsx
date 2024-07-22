import figma from '@figma/code-connect'
import { WatsonHealthWindowAuto } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthWindowAuto,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-288',

  {
    imports: ["import { WatsonHealthWindowAuto } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthWindowAuto size={props.size} />,
  },
)
