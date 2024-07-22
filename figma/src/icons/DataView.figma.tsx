import figma from '@figma/code-connect'
import { DataView } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataView,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-830',

  {
    imports: ["import { DataView } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataView size={props.size} />,
  },
)
