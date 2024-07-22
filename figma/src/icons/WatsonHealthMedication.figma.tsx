import figma from '@figma/code-connect'
import { WatsonHealthMedication } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthMedication,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-153',

  {
    imports: ["import { WatsonHealthMedication } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthMedication size={props.size} />,
  },
)
