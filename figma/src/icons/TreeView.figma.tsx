import figma from '@figma/code-connect'
import { TreeView } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TreeView,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1149',

  {
    imports: ["import { TreeView } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TreeView size={props.size} />,
  },
)
