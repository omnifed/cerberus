import figma from '@figma/code-connect'
import { ShapeExcept } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ShapeExcept,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-485',

  {
    imports: ["import { ShapeExcept } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ShapeExcept size={props.size} />,
  },
)
