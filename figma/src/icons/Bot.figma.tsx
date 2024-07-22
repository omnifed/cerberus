import figma from '@figma/code-connect'
import { Bot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-311',

  {
    imports: ["import { Bot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bot size={props.size} />,
  },
)
