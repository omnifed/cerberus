import figma from '@figma/code-connect'
import { ArrowRight } from '@cerberus-design/icons'

figma.connect(
  ArrowRight,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=8688-3388&m=dev',

  {
    imports: ["import { ArrowRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowRight size={props.size} />,
  },
)
