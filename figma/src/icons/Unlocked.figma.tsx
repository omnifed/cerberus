import figma from '@figma/code-connect'
import { Unlocked } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Unlocked,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36485',

  {
    imports: ["import { Unlocked } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Unlocked size={props.size} />,
  },
)
