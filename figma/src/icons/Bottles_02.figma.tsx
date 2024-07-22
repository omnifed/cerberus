import figma from '@figma/code-connect'
import { Bottles_02 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bottles_02,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1167',

  {
    imports: ["import { Bottles_02 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bottles_02 size={props.size} />,
  },
)
