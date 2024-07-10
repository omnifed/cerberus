import figma from '@figma/code-connect'
import { InformationFilled } from '@cerberus-design/icons'

figma.connect(
  InformationFilled,
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9266-591&m=dev',

  {
    imports: ["import { InformationFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InformationFilled size={props.size} />,
  },
)
