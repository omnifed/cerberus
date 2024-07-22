import figma from '@figma/code-connect'
import { Tree } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Tree,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1143',

  {
    imports: ["import { Tree } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Tree size={props.size} />,
  },
)
