import figma from '@figma/code-connect'
import { ArrowLeft } from '@cerberus-design/icons'

figma.connect(
  ArrowLeft,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9018-8977&m=dev',

  {
    imports: ["import { ArrowLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowLeft size={props.size} />,
  },
)
