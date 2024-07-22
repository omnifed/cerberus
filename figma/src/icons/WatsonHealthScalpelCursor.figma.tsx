import figma from '@figma/code-connect'
import { WatsonHealthScalpelCursor } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthScalpelCursor,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-213',

  {
    imports: ["import { WatsonHealthScalpelCursor } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthScalpelCursor size={props.size} />,
  },
)
