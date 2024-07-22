import figma from '@figma/code-connect'
import { IBMCloudDirectLink1Dedicated } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudDirectLink1Dedicated,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-27',

  {
    imports: ["import { IBMCloudDirectLink1Dedicated } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudDirectLink1Dedicated size={props.size} />,
  },
)
