import figma from '@figma/code-connect'
import { Forum } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Forum,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-742',

  {
    imports: ["import { Forum } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Forum size={props.size} />,
  },
)
