import figma from '@figma/code-connect'
import { MacOption } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MacOption,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-144',

  {
    imports: ["import { MacOption } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MacOption size={props.size} />,
  },
)
