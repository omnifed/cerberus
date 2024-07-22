import figma from '@figma/code-connect'
import { IBMCloudPrivilegedAccessGateway } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPrivilegedAccessGateway,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-157',

  {
    imports: [
      "import { IBMCloudPrivilegedAccessGateway } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPrivilegedAccessGateway size={props.size} />,
  },
)
