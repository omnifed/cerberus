import figma from '@figma/code-connect'
import { Undefined } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Undefined,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-253',

  {
    imports: ["import { Undefined } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Undefined size={props.size} />,
  },
)
