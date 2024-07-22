import figma from '@figma/code-connect'
import { DocumentWordProcessorReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentWordProcessorReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-976',

  {
    imports: [
      "import { DocumentWordProcessorReference } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentWordProcessorReference size={props.size} />,
  },
)
