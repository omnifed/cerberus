import figma from '@figma/code-connect'
import { CloudDownload } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudDownload,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-29',

  {
    imports: ["import { CloudDownload } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudDownload size={props.size} />,
  },
)
