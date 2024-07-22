import figma from '@figma/code-connect'
import { WatsonHealthCrossReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthCrossReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-72',

  {
    imports: ["import { WatsonHealthCrossReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthCrossReference size={props.size} />,
  },
)
