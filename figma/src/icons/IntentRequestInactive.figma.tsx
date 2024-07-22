import figma from '@figma/code-connect'
import { IntentRequestInactive } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IntentRequestInactive,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-239',

  {
    imports: ["import { IntentRequestInactive } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IntentRequestInactive size={props.size} />,
  },
)
