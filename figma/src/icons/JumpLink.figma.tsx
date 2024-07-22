import figma from '@figma/code-connect'
import { JumpLink } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  JumpLink,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-26',

  {
    imports: ["import { JumpLink } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <JumpLink size={props.size} />,
  },
)
