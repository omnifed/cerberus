import figma from '@figma/code-connect'
import { Undo } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Undo,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1091',

  {
    imports: ["import { Undo } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Undo size={props.size} />,
  },
)
