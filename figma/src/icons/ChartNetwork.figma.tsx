import figma from '@figma/code-connect'
import { ChartNetwork } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartNetwork,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-695',

  {
    imports: ["import { ChartNetwork } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartNetwork size={props.size} />,
  },
)
