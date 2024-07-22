import figma from '@figma/code-connect'
import { Close } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Close,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9091-3254',

  {
    imports: ["import { Close } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Close size={props.size} />,
  },
)
