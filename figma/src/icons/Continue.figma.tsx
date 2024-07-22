import figma from '@figma/code-connect'
import { Continue } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Continue,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35058',

  {
    imports: ["import { Continue } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Continue size={props.size} />,
  },
)
