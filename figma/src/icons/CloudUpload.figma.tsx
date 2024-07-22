import figma from '@figma/code-connect'
import { CloudUpload } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudUpload,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-35',

  {
    imports: ["import { CloudUpload } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudUpload size={props.size} />,
  },
)
