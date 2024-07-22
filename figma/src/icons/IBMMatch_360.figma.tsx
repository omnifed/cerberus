import figma from '@figma/code-connect'
import { IBMMatch_360 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMMatch_360,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1272',

  {
    imports: ["import { IBMMatch_360 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMMatch_360 size={props.size} />,
  },
)
