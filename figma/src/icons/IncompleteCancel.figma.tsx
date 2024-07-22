import figma from '@figma/code-connect'
import { IncompleteCancel } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IncompleteCancel,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-241',

  {
    imports: ["import { IncompleteCancel } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IncompleteCancel size={props.size} />,
  },
)
