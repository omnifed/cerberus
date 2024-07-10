import figma from '@figma/code-connect'
import { Information } from '@cerberus-design/icons'

figma.connect(
  Information,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9266-590&m=dev',

  {
    imports: ["import { Information } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Information size={props.size} />,
  },
)
