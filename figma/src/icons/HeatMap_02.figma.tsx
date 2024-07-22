import figma from '@figma/code-connect'
import { HeatMap_02 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HeatMap_02,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-941',

  {
    imports: ["import { HeatMap_02 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HeatMap_02 size={props.size} />,
  },
)
