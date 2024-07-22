import figma from '@figma/code-connect'
import { BuildingInsights_2 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BuildingInsights_2,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-2',

  {
    imports: ["import { BuildingInsights_2 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BuildingInsights_2 size={props.size} />,
  },
)
