import figma from '@figma/code-connect'
import { WatsonHealthRotate_180 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthRotate_180,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-198',

  {
    imports: ["import { WatsonHealthRotate_180 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthRotate_180 size={props.size} />,
  },
)
