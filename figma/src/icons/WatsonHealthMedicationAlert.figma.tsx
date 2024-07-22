import figma from '@figma/code-connect'
import { WatsonHealthMedicationAlert } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthMedicationAlert,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-156',

  {
    imports: ["import { WatsonHealthMedicationAlert } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthMedicationAlert size={props.size} />,
  },
)
