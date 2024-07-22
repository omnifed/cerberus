import figma from '@figma/code-connect'
import { OperationsRecord } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  OperationsRecord,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-156',

  {
    imports: ["import { OperationsRecord } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <OperationsRecord size={props.size} />,
  },
)
