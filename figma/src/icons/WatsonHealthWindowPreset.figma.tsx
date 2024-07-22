import figma from '@figma/code-connect'
import { WatsonHealthWindowPreset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthWindowPreset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-300',

  {
    imports: ["import { WatsonHealthWindowPreset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthWindowPreset size={props.size} />,
  },
)
