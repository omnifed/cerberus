import figma from '@figma/code-connect'
import { ChartVennDiagram } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartVennDiagram,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-749',

  {
    imports: ["import { ChartVennDiagram } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartVennDiagram size={props.size} />,
  },
)
