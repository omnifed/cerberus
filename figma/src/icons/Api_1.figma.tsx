import figma from '@figma/code-connect'
import { Api_1 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Api_1,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-11',

  {
    imports: ["import { Api_1 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Api_1 size={props.size} />,
  },
)
