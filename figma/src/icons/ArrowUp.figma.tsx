import figma from '@figma/code-connect'
import { ArrowUp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowUp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-3429',

  {
    imports: ["import { ArrowUp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowUp size={props.size} />,
  },
)
