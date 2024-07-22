import figma from '@figma/code-connect'
import { IBMCloudPakNetworkAutomation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakNetworkAutomation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1317',

  {
    imports: ["import { IBMCloudPakNetworkAutomation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakNetworkAutomation size={props.size} />,
  },
)
