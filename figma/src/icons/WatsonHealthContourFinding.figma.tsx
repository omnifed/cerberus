import figma from '@figma/code-connect'
import { WatsonHealthContourFinding } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthContourFinding,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-66',

  {
    imports: ["import { WatsonHealthContourFinding } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthContourFinding size={props.size} />,
  },
)
