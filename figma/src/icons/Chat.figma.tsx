import figma from '@figma/code-connect'
import { Chat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Chat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2265',

  {
    imports: ["import { Chat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Chat size={props.size} />,
  },
)
