import figma from '@figma/code-connect'
import { WatsonHealthChemistryReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthChemistryReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-51',

  {
    imports: [
      "import { WatsonHealthChemistryReference } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthChemistryReference size={props.size} />,
  },
)
