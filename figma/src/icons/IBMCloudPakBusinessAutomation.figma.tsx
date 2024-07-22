import figma from '@figma/code-connect'
import { IBMCloudPakBusinessAutomation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakBusinessAutomation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1302',

  {
    imports: [
      "import { IBMCloudPakBusinessAutomation } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakBusinessAutomation size={props.size} />,
  },
)
