import figma from '@figma/code-connect'
import { Term } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Term,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1131',

  {
    imports: ["import { Term } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Term size={props.size} />,
  },
)
