import figma from '@figma/code-connect'
import { Stamp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Stamp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-51',

  {
    imports: ["import { Stamp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Stamp size={props.size} />,
  },
)
