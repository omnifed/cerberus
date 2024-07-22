import figma from '@figma/code-connect'
import { WatsonHealthImageAvailabilityUnavailable } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthImageAvailabilityUnavailable,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-312',

  {
    imports: [
      "import { WatsonHealthImageAvailabilityUnavailable } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => (
      <WatsonHealthImageAvailabilityUnavailable size={props.size} />
    ),
  },
)
