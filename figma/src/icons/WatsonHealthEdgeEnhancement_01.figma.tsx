import figma from '@figma/code-connect'
import { WatsonHealthEdgeEnhancement_01 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthEdgeEnhancement_01,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-96',

  {
    imports: [
      "import { WatsonHealthEdgeEnhancement_01 } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthEdgeEnhancement_01 size={props.size} />,
  },
)
