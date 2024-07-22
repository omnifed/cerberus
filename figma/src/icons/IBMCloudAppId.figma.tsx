import figma from '@figma/code-connect'
import { IBMCloudAppId } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudAppId,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-142',

  {
    imports: ["import { IBMCloudAppId } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudAppId size={props.size} />,
  },
)
