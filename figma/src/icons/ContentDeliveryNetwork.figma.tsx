import figma from '@figma/code-connect'
import { ContentDeliveryNetwork } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ContentDeliveryNetwork,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1236',

  {
    imports: ["import { ContentDeliveryNetwork } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ContentDeliveryNetwork size={props.size} />,
  },
)
