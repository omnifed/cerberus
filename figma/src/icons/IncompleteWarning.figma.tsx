import figma from '@figma/code-connect'
import { IncompleteWarning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IncompleteWarning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-243',

  {
    imports: ["import { IncompleteWarning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IncompleteWarning size={props.size} />,
  },
)
