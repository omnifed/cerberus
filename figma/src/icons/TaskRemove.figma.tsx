import figma from '@figma/code-connect'
import { TaskRemove } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TaskRemove,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1297',

  {
    imports: ["import { TaskRemove } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TaskRemove size={props.size} />,
  },
)
