import figma from '@figma/code-connect'
import { WatsonHealthStatusResolved } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthStatusResolved,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-249',

  {
    imports: ["import { WatsonHealthStatusResolved } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthStatusResolved size={props.size} />,
  },
)
