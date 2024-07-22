import figma from '@figma/code-connect'
import { DocumentSigned } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentSigned,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-949',

  {
    imports: ["import { DocumentSigned } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentSigned size={props.size} />,
  },
)
