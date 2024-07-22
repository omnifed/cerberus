import figma from '@figma/code-connect'
import { WatsonHealthPillsSubtract } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthPillsSubtract,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-180',

  {
    imports: ["import { WatsonHealthPillsSubtract } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthPillsSubtract size={props.size} />,
  },
)
