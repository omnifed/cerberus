import figma from '@figma/code-connect'
import { HeatMap } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HeatMap,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-938',

  {
    imports: ["import { HeatMap } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HeatMap size={props.size} />,
  },
)
