import figma from '@figma/code-connect'
import { ChartPoint } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartPoint,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-704',

  {
    imports: ["import { ChartPoint } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartPoint size={props.size} />,
  },
)
