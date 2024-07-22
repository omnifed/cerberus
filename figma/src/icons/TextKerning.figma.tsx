import figma from '@figma/code-connect'
import { TextKerning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextKerning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-11',

  {
    imports: ["import { TextKerning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextKerning size={props.size} />,
  },
)
