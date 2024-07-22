import figma from '@figma/code-connect'
import { WatsonHealthHL7Attributes } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthHL7Attributes,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-120',

  {
    imports: ["import { WatsonHealthHL7Attributes } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthHL7Attributes size={props.size} />,
  },
)
