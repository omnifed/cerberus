import figma from '@figma/code-connect'
import { Information } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Information,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9266-590',

  {
    imports: ["import { Information } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Information size={props.size} />,
  },
)
