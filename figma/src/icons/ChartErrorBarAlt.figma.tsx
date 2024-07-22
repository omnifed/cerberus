import figma from '@figma/code-connect'
import { ChartErrorBarAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartErrorBarAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-656',

  {
    imports: ["import { ChartErrorBarAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartErrorBarAlt size={props.size} />,
  },
)
