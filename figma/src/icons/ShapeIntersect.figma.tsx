import figma from '@figma/code-connect'
import { ShapeIntersect } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ShapeIntersect,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-491',

  {
    imports: ["import { ShapeIntersect } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ShapeIntersect size={props.size} />,
  },
)
