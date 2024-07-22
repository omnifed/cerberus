import figma from '@figma/code-connect'
import { DeliveryAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeliveryAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1030',

  {
    imports: ["import { DeliveryAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeliveryAdd size={props.size} />,
  },
)
