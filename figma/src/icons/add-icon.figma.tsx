import figma from '@figma/code-connect'
import { Add } from '@cerberus-design/icons'

figma.connect(
  Add,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9261-475&m=dev',

  {
    imports: ["import { Add } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Add size={props.size} />,
  },
)
