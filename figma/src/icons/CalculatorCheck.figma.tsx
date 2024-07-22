import figma from '@figma/code-connect'
import { CalculatorCheck } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CalculatorCheck,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-11',

  {
    imports: ["import { CalculatorCheck } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CalculatorCheck size={props.size} />,
  },
)
