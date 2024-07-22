import figma from '@figma/code-connect'
import { DataReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-818',

  {
    imports: ["import { DataReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataReference size={props.size} />,
  },
)
