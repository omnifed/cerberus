import figma from '@figma/code-connect'
import { Code } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Code,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-655',

  {
    imports: ["import { Code } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Code size={props.size} />,
  },
)
