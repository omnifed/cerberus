import figma from '@figma/code-connect'
import { ViewFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ViewFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-163',

  {
    imports: ["import { ViewFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ViewFilled size={props.size} />,
  },
)
