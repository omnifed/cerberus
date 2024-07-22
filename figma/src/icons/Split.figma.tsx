import figma from '@figma/code-connect'
import { Split } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Split,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1107',

  {
    imports: ["import { Split } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Split size={props.size} />,
  },
)
