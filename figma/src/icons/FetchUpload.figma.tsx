import figma from '@figma/code-connect'
import { FetchUpload } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FetchUpload,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-733',

  {
    imports: ["import { FetchUpload } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FetchUpload size={props.size} />,
  },
)
