import figma from '@figma/code-connect'
import { ChartCombo } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartCombo,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-644',

  {
    imports: ["import { ChartCombo } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartCombo size={props.size} />,
  },
)
