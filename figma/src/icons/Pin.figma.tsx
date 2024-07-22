import figma from '@figma/code-connect'
import { Pin } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Pin,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-163',

  {
    imports: ["import { Pin } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Pin size={props.size} />,
  },
)
