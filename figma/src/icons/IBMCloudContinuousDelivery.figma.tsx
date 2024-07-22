import figma from '@figma/code-connect'
import { IBMCloudContinuousDelivery } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudContinuousDelivery,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-145',

  {
    imports: ["import { IBMCloudContinuousDelivery } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudContinuousDelivery size={props.size} />,
  },
)
