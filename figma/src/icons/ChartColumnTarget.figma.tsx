import figma from '@figma/code-connect'
import { ChartColumnTarget } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartColumnTarget,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-641',

  {
    imports: ["import { ChartColumnTarget } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartColumnTarget size={props.size} />,
  },
)
