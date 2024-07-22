import figma from '@figma/code-connect'
import { IBMCloudDirectLink2Dedicated } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudDirectLink2Dedicated,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-39',

  {
    imports: ["import { IBMCloudDirectLink2Dedicated } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudDirectLink2Dedicated size={props.size} />,
  },
)
