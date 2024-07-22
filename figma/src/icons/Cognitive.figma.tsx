import figma from '@figma/code-connect'
import { Cognitive } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cognitive,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-4',

  {
    imports: ["import { Cognitive } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cognitive size={props.size} />,
  },
)
