import figma from '@figma/code-connect'
import { ChartScatter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartScatter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-728',

  {
    imports: ["import { ChartScatter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartScatter size={props.size} />,
  },
)
