import figma from '@figma/code-connect'
import { Umbrella } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Umbrella,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-198',

  {
    imports: ["import { Umbrella } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Umbrella size={props.size} />,
  },
)
