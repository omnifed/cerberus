import figma from '@figma/code-connect'
import { CloudFoundry_1 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudFoundry_1,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1218',

  {
    imports: ["import { CloudFoundry_1 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudFoundry_1 size={props.size} />,
  },
)
