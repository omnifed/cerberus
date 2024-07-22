import figma from '@figma/code-connect'
import { ChatLaunch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChatLaunch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1108',

  {
    imports: ["import { ChatLaunch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChatLaunch size={props.size} />,
  },
)
