import figma from '@figma/code-connect'
import { Calculation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Calculation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-578',

  {
    imports: ["import { Calculation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Calculation size={props.size} />,
  },
)
