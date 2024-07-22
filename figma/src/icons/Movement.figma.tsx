import figma from '@figma/code-connect'
import { Movement } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Movement,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-7',

  {
    imports: ["import { Movement } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Movement size={props.size} />,
  },
)
