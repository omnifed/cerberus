import figma from '@figma/code-connect'
import { RepeatOne } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RepeatOne,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-171',

  {
    imports: ["import { RepeatOne } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RepeatOne size={props.size} />,
  },
)
