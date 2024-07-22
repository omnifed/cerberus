import figma from '@figma/code-connect'
import { ChatBot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChatBot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-23',

  {
    imports: ["import { ChatBot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChatBot size={props.size} />,
  },
)
