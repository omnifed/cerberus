import figma from '@figma/code-connect'
import { Cut } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cut,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-192',

  {
    imports: ["import { Cut } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cut size={props.size} />,
  },
)
