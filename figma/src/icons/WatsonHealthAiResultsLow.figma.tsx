import figma from '@figma/code-connect'
import { WatsonHealthAiResultsLow } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiResultsLow,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1976',

  {
    imports: ["import { WatsonHealthAiResultsLow } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiResultsLow size={props.size} />,
  },
)
