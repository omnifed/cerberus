import figma from '@figma/code-connect'
import { IBMDb2Alt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMDb2Alt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-130',

  {
    imports: ["import { IBMDb2Alt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMDb2Alt size={props.size} />,
  },
)
