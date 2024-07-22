import figma from '@figma/code-connect'
import { NotificationOff } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NotificationOff,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36509',

  {
    imports: ["import { NotificationOff } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NotificationOff size={props.size} />,
  },
)
