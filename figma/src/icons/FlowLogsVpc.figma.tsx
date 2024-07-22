import figma from '@figma/code-connect'
import { FlowLogsVpc } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FlowLogsVpc,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1266',

  {
    imports: ["import { FlowLogsVpc } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FlowLogsVpc size={props.size} />,
  },
)
