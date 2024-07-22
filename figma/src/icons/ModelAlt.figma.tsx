import figma from '@figma/code-connect'
import { ModelAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ModelAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1143',

  {
    imports: ["import { ModelAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ModelAlt size={props.size} />,
  },
)
