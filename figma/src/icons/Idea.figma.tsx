import figma from '@figma/code-connect'
import { Idea } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Idea,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-6',

  {
    imports: ["import { Idea } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Idea size={props.size} />,
  },
)
