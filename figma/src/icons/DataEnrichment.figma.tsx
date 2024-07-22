import figma from '@figma/code-connect'
import { DataEnrichment } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataEnrichment,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-848',

  {
    imports: ["import { DataEnrichment } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataEnrichment size={props.size} />,
  },
)
