import figma from '@figma/code-connect'
import { ScreenMapSet } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ScreenMapSet,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-89',

  {
    imports: ["import { ScreenMapSet } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ScreenMapSet size={props.size} />,
  },
)
