import figma from '@figma/code-connect'
import { NetworkPublic } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NetworkPublic,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-302',

  {
    imports: ["import { NetworkPublic } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NetworkPublic size={props.size} />,
  },
)
