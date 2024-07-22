import figma from '@figma/code-connect'
import { Cursor_1 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cursor_1,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-15',

  {
    imports: ["import { Cursor_1 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cursor_1 size={props.size} />,
  },
)
