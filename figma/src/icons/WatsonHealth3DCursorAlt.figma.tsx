import figma from '@figma/code-connect'
import { WatsonHealth3DCursorAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealth3DCursorAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1942',

  {
    imports: ["import { WatsonHealth3DCursorAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealth3DCursorAlt size={props.size} />,
  },
)
