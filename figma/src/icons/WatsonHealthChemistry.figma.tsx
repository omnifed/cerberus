import figma from '@figma/code-connect'
import { WatsonHealthChemistry } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthChemistry,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-47',

  {
    imports: ["import { WatsonHealthChemistry } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthChemistry size={props.size} />,
  },
)
