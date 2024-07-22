import figma from '@figma/code-connect'
import { Download } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Download,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-979',

  {
    imports: ["import { Download } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Download size={props.size} />,
  },
)
