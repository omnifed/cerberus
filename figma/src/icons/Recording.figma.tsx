import figma from '@figma/code-connect'
import { Recording } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Recording,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35154',

  {
    imports: ["import { Recording } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Recording size={props.size} />,
  },
)
