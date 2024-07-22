import figma from '@figma/code-connect'
import { Concept } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Concept,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-776',

  {
    imports: ["import { Concept } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Concept size={props.size} />,
  },
)
