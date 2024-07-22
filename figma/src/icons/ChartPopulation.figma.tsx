import figma from '@figma/code-connect'
import { ChartPopulation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartPopulation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-707',

  {
    imports: ["import { ChartPopulation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartPopulation size={props.size} />,
  },
)
