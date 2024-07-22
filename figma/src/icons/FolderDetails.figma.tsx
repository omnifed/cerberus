import figma from '@figma/code-connect'
import { FolderDetails } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FolderDetails,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-997',

  {
    imports: ["import { FolderDetails } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FolderDetails size={props.size} />,
  },
)
