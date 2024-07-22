import figma from '@figma/code-connect'
import { WatsonHealthEdgeEnhancement } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthEdgeEnhancement,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-93',

  {
    imports: ["import { WatsonHealthEdgeEnhancement } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthEdgeEnhancement size={props.size} />,
  },
)
