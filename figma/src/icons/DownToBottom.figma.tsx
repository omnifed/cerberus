import figma from '@figma/code-connect'
import { DownToBottom } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DownToBottom,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4122',

  {
    imports: ["import { DownToBottom } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DownToBottom size={props.size} />,
  },
)
