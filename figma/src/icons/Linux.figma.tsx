import figma from '@figma/code-connect'
import { Linux } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Linux,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-977',

  {
    imports: ["import { Linux } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Linux size={props.size} />,
  },
)
