import figma from '@figma/code-connect'
import { MessageQueue } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MessageQueue,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-281',

  {
    imports: ["import { MessageQueue } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MessageQueue size={props.size} />,
  },
)
