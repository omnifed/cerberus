import figma from '@figma/code-connect'
import { Ruler } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Ruler,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-36',

  {
    imports: ["import { Ruler } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Ruler size={props.size} />,
  },
)
