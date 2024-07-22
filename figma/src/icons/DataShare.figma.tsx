import figma from '@figma/code-connect'
import { DataShare } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataShare,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-866',

  {
    imports: ["import { DataShare } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataShare size={props.size} />,
  },
)
