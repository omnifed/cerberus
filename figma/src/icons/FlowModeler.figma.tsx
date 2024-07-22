import figma from '@figma/code-connect'
import { FlowModeler } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FlowModeler,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-920',

  {
    imports: ["import { FlowModeler } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FlowModeler size={props.size} />,
  },
)
