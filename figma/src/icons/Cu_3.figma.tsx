import figma from '@figma/code-connect'
import { Cu_3 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cu_3,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-677',

  {
    imports: ["import { Cu_3 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cu_3 size={props.size} />,
  },
)
