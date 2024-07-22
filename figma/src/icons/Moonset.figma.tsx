import figma from '@figma/code-connect'
import { Moonset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Moonset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-804',

  {
    imports: ["import { Moonset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Moonset size={props.size} />,
  },
)
