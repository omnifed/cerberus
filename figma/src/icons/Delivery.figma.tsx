import figma from '@figma/code-connect'
import { Delivery } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Delivery,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1027',

  {
    imports: ["import { Delivery } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Delivery size={props.size} />,
  },
)
