import figma from '@figma/code-connect'
import { SendToBack } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SendToBack,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-482',

  {
    imports: ["import { SendToBack } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SendToBack size={props.size} />,
  },
)
