import figma from '@figma/code-connect'
import { ChartLine } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartLine,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-668',

  {
    imports: ["import { ChartLine } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartLine size={props.size} />,
  },
)
