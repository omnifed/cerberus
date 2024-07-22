import figma from '@figma/code-connect'
import { Windy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Windy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9385-1204',

  {
    imports: ["import { Windy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Windy size={props.size} />,
  },
)
