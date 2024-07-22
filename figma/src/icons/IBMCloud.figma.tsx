import figma from '@figma/code-connect'
import { IBMCloud } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloud,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9614-3280',

  {
    imports: ["import { IBMCloud } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloud size={props.size} />,
  },
)
