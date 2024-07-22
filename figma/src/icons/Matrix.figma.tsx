import figma from '@figma/code-connect'
import { Matrix } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Matrix,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-683',

  {
    imports: ["import { Matrix } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Matrix size={props.size} />,
  },
)
