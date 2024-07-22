import figma from '@figma/code-connect'
import { Plan } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Plan,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1357',

  {
    imports: ["import { Plan } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Plan size={props.size} />,
  },
)
