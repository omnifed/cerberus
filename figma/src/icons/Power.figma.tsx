import figma from '@figma/code-connect'
import { Power } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Power,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35145',

  {
    imports: ["import { Power } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Power size={props.size} />,
  },
)
