import figma from '@figma/code-connect'
import { Folder } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Folder,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-991',

  {
    imports: ["import { Folder } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Folder size={props.size} />,
  },
)
