import figma from '@figma/code-connect'
import { ChartRiver } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartRiver,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-722',

  {
    imports: ["import { ChartRiver } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartRiver size={props.size} />,
  },
)
