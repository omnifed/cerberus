import figma from '@figma/code-connect'
import { WatsonHealthAiResultsHigh } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiResultsHigh,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1973',

  {
    imports: ["import { WatsonHealthAiResultsHigh } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiResultsHigh size={props.size} />,
  },
)
