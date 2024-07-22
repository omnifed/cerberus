import figma from '@figma/code-connect'
import { _4kFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  _4kFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-5',

  {
    imports: ["import { _4kFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <_4kFilled size={props.size} />,
  },
)
