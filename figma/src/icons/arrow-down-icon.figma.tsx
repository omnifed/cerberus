import figma from '@figma/code-connect'
import { ArrowDown } from '@cerberus-design/icons'

figma.connect(
  ArrowDown,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9266-1144&m=dev',

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
