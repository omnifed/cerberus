import figma from '@figma/code-connect'
import { TestTool } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TestTool,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-15',

  {
    imports: ["import { TestTool } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TestTool size={props.size} />,
  },
)
