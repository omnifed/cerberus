import figma from '@figma/code-connect'
import { ArrowDown } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowDown,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9266-1144',

  {
    imports: ["import { ArrowDown } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowDown size={props.size} />,
  },
)
