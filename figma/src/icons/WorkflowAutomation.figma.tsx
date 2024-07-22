import figma from '@figma/code-connect'
import { WorkflowAutomation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WorkflowAutomation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-47',

  {
    imports: ["import { WorkflowAutomation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WorkflowAutomation size={props.size} />,
  },
)
