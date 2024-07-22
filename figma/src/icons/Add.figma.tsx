import figma from '@figma/code-connect'
import { Add } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Add,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-475',

  {
    imports: ["import { Add } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Add size={props.size} />,
  },
)
