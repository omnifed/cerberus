import figma from '@figma/code-connect'
import { Rewind_5 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Rewind_5,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35169',

  {
    imports: ["import { Rewind_5 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Rewind_5 size={props.size} />,
  },
)
