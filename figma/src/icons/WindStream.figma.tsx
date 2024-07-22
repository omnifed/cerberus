import figma from '@figma/code-connect'
import { WindStream } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WindStream,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9385-1211',

  {
    imports: ["import { WindStream } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WindStream size={props.size} />,
  },
)
