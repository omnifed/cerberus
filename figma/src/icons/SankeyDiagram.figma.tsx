import figma from '@figma/code-connect'
import { SankeyDiagram } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SankeyDiagram,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1065',

  {
    imports: ["import { SankeyDiagram } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SankeyDiagram size={props.size} />,
  },
)
