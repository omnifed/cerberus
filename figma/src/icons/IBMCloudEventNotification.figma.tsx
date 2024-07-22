import figma from '@figma/code-connect'
import { IBMCloudEventNotification } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudEventNotification,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-42',

  {
    imports: ["import { IBMCloudEventNotification } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudEventNotification size={props.size} />,
  },
)
