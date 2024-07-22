import figma from '@figma/code-connect'
import { Portfolio } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Portfolio,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-30',

  {
    imports: ["import { Portfolio } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Portfolio size={props.size} />,
  },
)
