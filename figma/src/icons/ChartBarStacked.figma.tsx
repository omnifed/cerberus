import figma from '@figma/code-connect'
import { ChartBarStacked } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartBarStacked,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-614',

  {
    imports: ["import { ChartBarStacked } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartBarStacked size={props.size} />,
  },
)
