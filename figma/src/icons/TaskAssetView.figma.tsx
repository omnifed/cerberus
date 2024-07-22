import figma from '@figma/code-connect'
import { TaskAssetView } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TaskAssetView,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1287',

  {
    imports: ["import { TaskAssetView } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TaskAssetView size={props.size} />,
  },
)
