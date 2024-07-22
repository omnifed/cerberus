import figma from '@figma/code-connect'
import { ChartMinimum } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartMinimum,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-686',

  {
    imports: ["import { ChartMinimum } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartMinimum size={props.size} />,
  },
)
