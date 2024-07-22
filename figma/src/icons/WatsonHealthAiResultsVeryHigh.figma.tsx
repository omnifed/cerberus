import figma from '@figma/code-connect'
import { WatsonHealthAiResultsVeryHigh } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiResultsVeryHigh,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1985',

  {
    imports: [
      "import { WatsonHealthAiResultsVeryHigh } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiResultsVeryHigh size={props.size} />,
  },
)
