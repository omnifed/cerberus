import figma from '@figma/code-connect'
import { InProgressError } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InProgressError,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-238',

  {
    imports: ["import { InProgressError } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InProgressError size={props.size} />,
  },
)
