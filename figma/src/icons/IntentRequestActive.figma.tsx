import figma from '@figma/code-connect'
import { IntentRequestActive } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IntentRequestActive,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-230',

  {
    imports: ["import { IntentRequestActive } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IntentRequestActive size={props.size} />,
  },
)
