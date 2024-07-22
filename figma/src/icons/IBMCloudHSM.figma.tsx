import figma from '@figma/code-connect'
import { IBMCloudHSM } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudHSM,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-151',

  {
    imports: ["import { IBMCloudHSM } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudHSM size={props.size} />,
  },
)
