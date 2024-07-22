import figma from '@figma/code-connect'
import { Chart3d } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Chart3d,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-590',

  {
    imports: ["import { Chart3d } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Chart3d size={props.size} />,
  },
)
