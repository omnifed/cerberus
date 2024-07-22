import figma from '@figma/code-connect'
import { ConnectReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConnectReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-12',

  {
    imports: ["import { ConnectReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConnectReference size={props.size} />,
  },
)
