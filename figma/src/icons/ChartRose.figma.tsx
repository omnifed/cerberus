import figma from '@figma/code-connect'
import { ChartRose } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartRose,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-725',

  {
    imports: ["import { ChartRose } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartRose size={props.size} />,
  },
)
