import figma from '@figma/code-connect'
import { CheckmarkFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CheckmarkFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-122',

  {
    imports: ["import { CheckmarkFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CheckmarkFilled size={props.size} />,
  },
)
