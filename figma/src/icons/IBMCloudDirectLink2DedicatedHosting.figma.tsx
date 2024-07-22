import figma from '@figma/code-connect'
import { IBMCloudDirectLink2DedicatedHosting } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudDirectLink2DedicatedHosting,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-36',

  {
    imports: [
      "import { IBMCloudDirectLink2DedicatedHosting } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => (
      <IBMCloudDirectLink2DedicatedHosting size={props.size} />
    ),
  },
)
