import figma from '@figma/code-connect'
import { ServerProxy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ServerProxy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-341',

  {
    imports: ["import { ServerProxy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ServerProxy size={props.size} />,
  },
)
