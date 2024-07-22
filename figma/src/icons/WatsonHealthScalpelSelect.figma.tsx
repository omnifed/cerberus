import figma from '@figma/code-connect'
import { WatsonHealthScalpelSelect } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthScalpelSelect,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-219',

  {
    imports: ["import { WatsonHealthScalpelSelect } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthScalpelSelect size={props.size} />,
  },
)
