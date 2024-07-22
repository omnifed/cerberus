import figma from '@figma/code-connect'
import { EdgeNode } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  EdgeNode,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-718',

  {
    imports: ["import { EdgeNode } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <EdgeNode size={props.size} />,
  },
)
