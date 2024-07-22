import figma from '@figma/code-connect'
import { PaintBrushAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PaintBrushAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-320',

  {
    imports: ["import { PaintBrushAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PaintBrushAlt size={props.size} />,
  },
)
