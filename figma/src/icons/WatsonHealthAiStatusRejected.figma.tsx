import figma from '@figma/code-connect'
import { WatsonHealthAiStatusRejected } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAiStatusRejected,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-17',

  {
    imports: ["import { WatsonHealthAiStatusRejected } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAiStatusRejected size={props.size} />,
  },
)
