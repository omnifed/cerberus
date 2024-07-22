import figma from '@figma/code-connect'
import { Apple } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Apple,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-915',

  {
    imports: ["import { Apple } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Apple size={props.size} />,
  },
)
