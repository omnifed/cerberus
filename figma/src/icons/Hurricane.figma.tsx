import figma from '@figma/code-connect'
import { Hurricane } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Hurricane,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-895',

  {
    imports: ["import { Hurricane } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Hurricane size={props.size} />,
  },
)
