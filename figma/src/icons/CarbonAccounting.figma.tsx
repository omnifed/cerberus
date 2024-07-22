import figma from '@figma/code-connect'
import { CarbonAccounting } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CarbonAccounting,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-964',

  {
    imports: ["import { CarbonAccounting } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CarbonAccounting size={props.size} />,
  },
)
