import figma from '@figma/code-connect'
import { DocumentPdf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentPdf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-937',

  {
    imports: ["import { DocumentPdf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentPdf size={props.size} />,
  },
)
