import figma from '@figma/code-connect'
import { ToolsAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ToolsAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-195',

  {
    imports: ["import { ToolsAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ToolsAlt size={props.size} />,
  },
)
