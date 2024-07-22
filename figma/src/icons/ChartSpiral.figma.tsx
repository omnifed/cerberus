import figma from '@figma/code-connect'
import { ChartSpiral } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartSpiral,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-731',

  {
    imports: ["import { ChartSpiral } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartSpiral size={props.size} />,
  },
)
