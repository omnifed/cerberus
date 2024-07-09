import figma from '@figma/code-connect'
import { Close } from '@cerberus-design/icons'

figma.connect(
  Close,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9091-3254&m=dev',

  {
    imports: ["import { Close } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Close size={props.size} />,
  },
)
