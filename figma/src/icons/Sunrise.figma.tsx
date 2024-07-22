import figma from '@figma/code-connect'
import { Sunrise } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Sunrise,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-566',

  {
    imports: ["import { Sunrise } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Sunrise size={props.size} />,
  },
)
