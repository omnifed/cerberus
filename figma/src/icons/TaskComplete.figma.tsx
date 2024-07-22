import figma from '@figma/code-connect'
import { TaskComplete } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TaskComplete,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1290',

  {
    imports: ["import { TaskComplete } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TaskComplete size={props.size} />,
  },
)
