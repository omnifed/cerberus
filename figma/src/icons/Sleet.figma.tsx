import figma from '@figma/code-connect'
import { Sleet } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Sleet,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-623',

  {
    imports: ["import { Sleet } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Sleet size={props.size} />,
  },
)
