import figma from '@figma/code-connect'
import { Omega } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Omega,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-1041',

  {
    imports: ["import { Omega } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Omega size={props.size} />,
  },
)
