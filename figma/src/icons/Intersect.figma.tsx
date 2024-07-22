import figma from '@figma/code-connect'
import { Intersect } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Intersect,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-25',

  {
    imports: ["import { Intersect } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Intersect size={props.size} />,
  },
)
