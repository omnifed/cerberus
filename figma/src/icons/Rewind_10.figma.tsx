import figma from '@figma/code-connect'
import { Rewind_10 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Rewind_10,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35163',

  {
    imports: ["import { Rewind_10 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Rewind_10 size={props.size} />,
  },
)
