import figma from '@figma/code-connect'
import { WatsonHealthExamMode } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthExamMode,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-108',

  {
    imports: ["import { WatsonHealthExamMode } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthExamMode size={props.size} />,
  },
)
