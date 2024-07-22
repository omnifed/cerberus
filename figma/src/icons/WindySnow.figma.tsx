import figma from '@figma/code-connect'
import { WindySnow } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WindySnow,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9385-47',

  {
    imports: ["import { WindySnow } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WindySnow size={props.size} />,
  },
)
