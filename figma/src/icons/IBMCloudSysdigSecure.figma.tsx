import figma from '@figma/code-connect'
import { IBMCloudSysdigSecure } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudSysdigSecure,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-72',

  {
    imports: ["import { IBMCloudSysdigSecure } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudSysdigSecure size={props.size} />,
  },
)
