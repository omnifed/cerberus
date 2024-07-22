import figma from '@figma/code-connect'
import { Cad } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cad,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-26',

  {
    imports: ["import { Cad } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cad size={props.size} />,
  },
)
