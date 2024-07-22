import figma from '@figma/code-connect'
import { Branch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Branch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2258',

  {
    imports: ["import { Branch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Branch size={props.size} />,
  },
)
