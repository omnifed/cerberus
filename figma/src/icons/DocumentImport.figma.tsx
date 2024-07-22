import figma from '@figma/code-connect'
import { DocumentImport } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentImport,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-934',

  {
    imports: ["import { DocumentImport } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentImport size={props.size} />,
  },
)
