import figma from '@figma/code-connect'
import { UnknownFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UnknownFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-256',

  {
    imports: ["import { UnknownFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UnknownFilled size={props.size} />,
  },
)
