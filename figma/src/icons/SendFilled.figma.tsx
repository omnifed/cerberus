import figma from '@figma/code-connect'
import { SendFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SendFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1099',

  {
    imports: ["import { SendFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SendFilled size={props.size} />,
  },
)
