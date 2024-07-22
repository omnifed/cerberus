import figma from '@figma/code-connect'
import { DataUnstructured } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataUnstructured,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-827',

  {
    imports: ["import { DataUnstructured } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataUnstructured size={props.size} />,
  },
)
