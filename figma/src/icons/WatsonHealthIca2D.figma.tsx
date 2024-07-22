import figma from '@figma/code-connect'
import { WatsonHealthIca2D } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthIca2D,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-129',

  {
    imports: ["import { WatsonHealthIca2D } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthIca2D size={props.size} />,
  },
)
