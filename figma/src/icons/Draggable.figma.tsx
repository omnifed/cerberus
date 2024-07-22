import figma from '@figma/code-connect'
import { Draggable } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Draggable,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4123',

  {
    imports: ["import { Draggable } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Draggable size={props.size} />,
  },
)
