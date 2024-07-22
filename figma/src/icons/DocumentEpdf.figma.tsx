import figma from '@figma/code-connect'
import { DocumentEpdf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentEpdf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-928',

  {
    imports: ["import { DocumentEpdf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentEpdf size={props.size} />,
  },
)
