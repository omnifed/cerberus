import figma from '@figma/code-connect'
import { Plug } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Plug,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-71',

  {
    imports: ["import { Plug } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Plug size={props.size} />,
  },
)
