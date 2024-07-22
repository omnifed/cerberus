import figma from '@figma/code-connect'
import { Network3Reference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Network3Reference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1007',

  {
    imports: ["import { Network3Reference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Network3Reference size={props.size} />,
  },
)
