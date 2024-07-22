import figma from '@figma/code-connect'
import { DoubleInteger } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DoubleInteger,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-902',

  {
    imports: ["import { DoubleInteger } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DoubleInteger size={props.size} />,
  },
)
