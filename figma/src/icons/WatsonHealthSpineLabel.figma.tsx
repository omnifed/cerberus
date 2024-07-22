import figma from '@figma/code-connect'
import { WatsonHealthSpineLabel } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthSpineLabel,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-228',

  {
    imports: ["import { WatsonHealthSpineLabel } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthSpineLabel size={props.size} />,
  },
)
