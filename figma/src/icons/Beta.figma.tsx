import figma from '@figma/code-connect'
import { Beta } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Beta,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-769',

  {
    imports: ["import { Beta } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Beta size={props.size} />,
  },
)
