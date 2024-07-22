import figma from '@figma/code-connect'
import { WatsonHealthAiResultsMedium } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiResultsMedium,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1979',

  {
    imports: ["import { WatsonHealthAiResultsMedium } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiResultsMedium size={props.size} />,
  },
)
