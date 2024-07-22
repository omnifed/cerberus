import figma from '@figma/code-connect'
import { Area } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Area,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2188',

  {
    imports: ["import { Area } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Area size={props.size} />,
  },
)
