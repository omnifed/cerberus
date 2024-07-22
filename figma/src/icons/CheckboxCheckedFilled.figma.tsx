import figma from '@figma/code-connect'
import { CheckboxCheckedFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CheckboxCheckedFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36437',

  {
    imports: ["import { CheckboxCheckedFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CheckboxCheckedFilled size={props.size} />,
  },
)
