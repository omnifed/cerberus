import figma from '@figma/code-connect'
import { Bullhorn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bullhorn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-9',

  {
    imports: ["import { Bullhorn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bullhorn size={props.size} />,
  },
)
