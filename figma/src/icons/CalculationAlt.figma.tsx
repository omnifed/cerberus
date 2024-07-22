import figma from '@figma/code-connect'
import { CalculationAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CalculationAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-581',

  {
    imports: ["import { CalculationAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CalculationAlt size={props.size} />,
  },
)
