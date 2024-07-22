import figma from '@figma/code-connect'
import { DragHorizontal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DragHorizontal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1128',

  {
    imports: ["import { DragHorizontal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DragHorizontal size={props.size} />,
  },
)
