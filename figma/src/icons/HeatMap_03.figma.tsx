import figma from '@figma/code-connect'
import { HeatMap_03 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HeatMap_03,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-944',

  {
    imports: ["import { HeatMap_03 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HeatMap_03 size={props.size} />,
  },
)
