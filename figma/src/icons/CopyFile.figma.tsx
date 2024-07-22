import figma from '@figma/code-connect'
import { CopyFile } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CopyFile,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-81',

  {
    imports: ["import { CopyFile } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CopyFile size={props.size} />,
  },
)
