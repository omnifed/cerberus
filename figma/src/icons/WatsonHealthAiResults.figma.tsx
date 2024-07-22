import figma from '@figma/code-connect'
import { WatsonHealthAiResults } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiResults,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1970',

  {
    imports: ["import { WatsonHealthAiResults } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiResults size={props.size} />,
  },
)
