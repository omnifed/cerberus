import figma from '@figma/code-connect'
import { CloudLogging } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudLogging,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1212',

  {
    imports: ["import { CloudLogging } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudLogging size={props.size} />,
  },
)
