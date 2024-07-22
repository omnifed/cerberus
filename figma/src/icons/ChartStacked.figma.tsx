import figma from '@figma/code-connect'
import { ChartStacked } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartStacked,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-734',

  {
    imports: ["import { ChartStacked } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartStacked size={props.size} />,
  },
)
