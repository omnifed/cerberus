import figma from '@figma/code-connect'
import { IncompleteError } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IncompleteError,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-242',

  {
    imports: ["import { IncompleteError } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IncompleteError size={props.size} />,
  },
)
