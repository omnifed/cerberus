import figma from '@figma/code-connect'
import { WatsonHealthWindowOverlay } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthWindowOverlay,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-297',

  {
    imports: ["import { WatsonHealthWindowOverlay } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthWindowOverlay size={props.size} />,
  },
)
