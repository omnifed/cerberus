import figma from '@figma/code-connect'
import { ChartColumn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartColumn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-635',

  {
    imports: ["import { ChartColumn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartColumn size={props.size} />,
  },
)
