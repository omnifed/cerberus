import figma from '@figma/code-connect'
import { ChartWinLoss } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartWinLoss,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-758',

  {
    imports: ["import { ChartWinLoss } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartWinLoss size={props.size} />,
  },
)
