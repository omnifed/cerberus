import figma from '@figma/code-connect'
import { IBMMq } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMMq,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-12',

  {
    imports: ["import { IBMMq } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMMq size={props.size} />,
  },
)
