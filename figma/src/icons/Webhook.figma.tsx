import figma from '@figma/code-connect'
import { Webhook } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Webhook,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-138',

  {
    imports: ["import { Webhook } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Webhook size={props.size} />,
  },
)
