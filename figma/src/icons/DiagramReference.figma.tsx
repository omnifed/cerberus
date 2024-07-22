import figma from '@figma/code-connect'
import { DiagramReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DiagramReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-896',

  {
    imports: ["import { DiagramReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DiagramReference size={props.size} />,
  },
)
