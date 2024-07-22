import figma from '@figma/code-connect'
import { CollapseAll } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CollapseAll,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1117',

  {
    imports: ["import { CollapseAll } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CollapseAll size={props.size} />,
  },
)
