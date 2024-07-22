import figma from '@figma/code-connect'
import { VmdkDisk } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VmdkDisk,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1179',

  {
    imports: ["import { VmdkDisk } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VmdkDisk size={props.size} />,
  },
)
