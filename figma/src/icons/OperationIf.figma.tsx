import figma from '@figma/code-connect'
import { OperationIf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  OperationIf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-686',

  {
    imports: ["import { OperationIf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <OperationIf size={props.size} />,
  },
)
