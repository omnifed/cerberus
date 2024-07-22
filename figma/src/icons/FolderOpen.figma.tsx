import figma from '@figma/code-connect'
import { FolderOpen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FolderOpen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1009',

  {
    imports: ["import { FolderOpen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FolderOpen size={props.size} />,
  },
)
