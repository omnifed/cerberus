import figma from '@figma/code-connect'
import { WatsonHealthScalpelLasso } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthScalpelLasso,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-216',

  {
    imports: ["import { WatsonHealthScalpelLasso } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthScalpelLasso size={props.size} />,
  },
)
