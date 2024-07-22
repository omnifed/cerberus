import figma from '@figma/code-connect'
import { CloudAlerting } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudAlerting,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-80',

  {
    imports: ["import { CloudAlerting } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudAlerting size={props.size} />,
  },
)
