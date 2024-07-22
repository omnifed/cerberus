import figma from '@figma/code-connect'
import { ChartRadial } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartRadial,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-713',

  {
    imports: ["import { ChartRadial } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartRadial size={props.size} />,
  },
)
