import figma from '@figma/code-connect'
import { DrillThrough } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DrillThrough,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-4',

  {
    imports: ["import { DrillThrough } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DrillThrough size={props.size} />,
  },
)
