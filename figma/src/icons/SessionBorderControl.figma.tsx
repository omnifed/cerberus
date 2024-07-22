import figma from '@figma/code-connect'
import { SessionBorderControl } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SessionBorderControl,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-347',

  {
    imports: ["import { SessionBorderControl } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SessionBorderControl size={props.size} />,
  },
)
