import figma from '@figma/code-connect'
import { PaintBrush } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PaintBrush,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-317',

  {
    imports: ["import { PaintBrush } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PaintBrush size={props.size} />,
  },
)
